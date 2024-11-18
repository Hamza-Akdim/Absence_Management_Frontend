// Première page affichée à l'utilisateur


// Imports nécessaires
import React from 'react'
import  '../Styles/WelcomeCSS.css'
import  { Link } from 'react-router-dom'; //On la navigation sans recharger la page entière => SPA (Single page application)


// Définition fonctionnelle de mon composant
function Welcome(){
    return(
        <div className="page_entiere">
        <div className="wrapper">
            <form action="">
                <h1>Bienvenue dans votre espace de gestion des absences</h1>
                 {/*Lien vers la page de saisie des abscences  */}
                <Link to="/saisie-absence">          
                <button  type="submit">📋 Marquer les absences</button>
                </Link>   
                {/* Lien vers la page d'historique des abscences */}
                <Link to="/historique-absence"> 
                <button>📜 Historique des absences</button> 
                </Link>
            </form>
        </div>
        </div>
    )
}
export default Welcome;