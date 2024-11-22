import { useState, useEffect } from 'react';
import '../Styles/SaisieAbsCSS.css';
import api from '../api';

function SaisieAbscence() {
    // Liste des étudiants
    const [etudiants, setEtudiants] = useState([]); 
    // Pour stocker les absences saisies
    const [absences, setAbsences] = useState([]); 


    // Mettre à jour les absences
function handleAbsenceChange(e, etudiantId) {
    setAbsences((prevAbsences) => ({
        ...prevAbsences,
        [etudiantId]: {
            ...prevAbsences[etudiantId],
            isAbsent: e.target.checked,
        },
    }));
}

// Mettre à jour les commentaires
function handleCommentaire(e, etudiantId) {
    setEtudiants((prevEtudiants) => 
        prevEtudiants.map((etudiant) => 
            etudiant.id === etudiantId 
            ? { ...etudiant, comment: e.target.value } // Met à jour le commentaire
            : etudiant
        )
    );
}


//Gestion du boutton enregistrer
function handleSubmit() {
    const absencesData = Object.keys(absences).map((etudiantId) => {
        const data = absences[etudiantId];
        return {
            etudiantId: parseInt(etudiantId),
            profId: 2, 
            motif: data.comment || "Absent sans motif", // Défaut si pas de commentaire
        };
    });

    // Envoi des données absence par absence
    Promise.all(
        absencesData.map((absence) =>
            api.post('/api/absences/mark', null, { params: absence })
        )
    )
        .then(() => {
            alert('Absences enregistrées avec succès !');
        })
        .catch((error) => {
            console.error("Erreur lors de l'enregistrement :", error);
        });
}



 
    



    // Utilisation de useEffect pour simuler le remplissage de données depuis une API
    useEffect(() => {
        // Récupérer les données depuis le back-end
        api.get('/students') //Point vers le end-point
            .then((response) => {
                setEtudiants(response.data);
            })
            .catch((error) => {
                console.error('Erreur lors de la récupération des étudiants:', error);
            });
    }, []);


    return (
        <div className="container">
            <h1 className='title'>Gestion des absences</h1>
            <table className="abs-table">
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Commentaire</th>
                        <th>Abscence</th>
                    </tr>
                </thead>
                <tbody>
                    {etudiants.map((etudiant) => (
                        <tr key={etudiant.id}>                          
                            <td>{etudiant.nom}</td>
                            <td>{etudiant.prenom}</td>
                            
                            <td>
                                <input
                                className='commentInput'
                                    type="text"
                                    name="commentaire"
                                    placeholder="Commenter"
                                    onChange={(e) => handleCommentaire(e, etudiant.id)}
                                />
                            </td>
                            <td>
                            <input
                                    className='absenceCheckbox'
                                    type="checkbox"
                                    name="abscence"
                                    onChange={(e) => handleAbsenceChange(e, etudiant.id)} 
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="btnSubmit" type="submit" onClick={handleSubmit}>Enregistrer</button>
        </div>
    );
}

export default SaisieAbscence;
