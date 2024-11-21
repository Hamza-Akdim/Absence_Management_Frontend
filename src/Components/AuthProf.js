import '../Styles/WelcomeCSS.css'
import { Link } from 'react-router-dom';
function AuthProf(){

    return(
        <div className="page_entiere">
        <div className="wrapper">
            <form action="">
                <h1>Espace professeur</h1>
                
                <input
                                className='firstName'
                                    type="text"
                                    name="Prénom"
                                    placeholder="Prénom"                                 
                                />
                <input
                                className='lastName'
                                    type="text"
                                    name="Nom"
                                    placeholder="Nom"                                 
                                />
                 <input
                                className='course'
                                    type="text"
                                    name="Cours"
                                    placeholder="cours"                                 
                                />

                 {/*Lien vers la page de saisie des abscences  */}
                 <Link to="/welc">          
                <button  type="submit">Suivant</button>
                </Link>   
            </form>
        </div>
        </div>
    )
}


export default AuthProf; 