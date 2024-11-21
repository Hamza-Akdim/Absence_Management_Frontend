import '../Styles/SaisieAbsCSS.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function HistoriqueAbsence() {
    const [etudiants, setEtudiants] = useState([]);
    const [absences, setAbsences] = useState([]);

    // Utilisation de useEffect pour récupérer les données depuis l'API
    useEffect(() => {
        // Récupérer les absences depuis l'API (exemple avec fetch)
        fetch('http://localhost:8080/api/absences')  // L'URL de votre API backend
            .then(response => response.json())
            .then(data => setAbsences(data))  // Mettre à jour l'état avec les absences
            .catch(error => console.error('Erreur:', error));

        // Récupérer les étudiants (peut-être une autre API ou une partie de la même)
        fetch('http://localhost:8080/api/students')  // L'URL de votre API backend pour les étudiants
            .then(response => response.json())
            .then(data => setEtudiants(data))  // Mettre à jour l'état avec les étudiants
            .catch(error => console.error('Erreur:', error));
    }, []);

    return (
        <div className='container'>
            <h1 className='title'>Historique des absences</h1>
            <table className="abs-table">
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Date</th>
                        <th>Heure</th>
                        <th>Gestion</th>
                    </tr>
                </thead>
                <tbody>
                    {absences.map((absence) => (
                        <tr key={absence.id}>
                            <td>{absence.etudiant.nom}</td>
                            <td>{absence.etudiant.prenom}</td>
                            <td>
                                <input
                                    className='dateInput'
                                    type="date"
                                    value={absence.date}  // Valeur provenant de la BDD
                                    // onChange={(e) => handleAbsenceChange(e, absence.id)}
                                />
                            </td>
                            <td>
                                <input
                                    className='hourInput'
                                    type="time"
                                    value={absence.heure}  // Valeur provenant de la BDD
                                    // onChange={(e) => handleAbsenceChange(e, absence.id)}
                                />
                            </td>
                            <td>
                                <Link to="/modfication">
                                    <button className='btn'>Modifier</button>
                                </Link>
                                <button className='btn'>Supprimer</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default HistoriqueAbsence;
