import { useState } from "react";
import "../Styles/WelcomeCSS.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { ProfState } from "../Context/ProfProvider";
// import { useToast } from "@chakra-ui/react";
// import { useHistory } from "react-router-dom";


function AuthProf() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [course, setCourse] = useState();

  const { profId,setProfId } = ProfState();

// const history = useHistory();
  // const toast = useToast();

  const submitHandker = async () => {
    if (!firstName || !lastName || !course) {
      // toast({
      //   title: "Remplissez tous les champs",
      //   status: "warning",
      //   duration: 5000,
      //   isClosable: true,
      //   position: "bottom",
      // });

      return;
    }

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "/api/prof/auth",
        {
          firstName,
          lastName,
          course,
        },
        config
      );

      setProfId(data);
      console.log(profId)

      // toast({
      //   title: "succès",
      //   status: "success",
      //   duration: 5000,
      //   isClosable: true,
      //   position: "bottom",
      // });

    // history.push("gestion-absence");

    } catch (error) {
      // if (error.response) {
      //   const { data } = error.response;
      //   toast({
      //     title: `Error: ${data}`,
      //     status: "error",
      //     duration: 5000,
      //     isClosable: true,
      //     position: "bottom",
      //   });
      // } else if (error.request) {
      //   toast({ 
      //     title: "Network Error",
      //     status: "error",
      //     duration: 5000,
      //     isClosable: true,
      //     position: "bottom",
      //   });
      // } else {
      //   toast({
      //     title: "Error",
      //     status: "error",
      //     duration: 5000,
      //     isClosable: true,
      //     position: "bottom",
      //   });
      // }

    }
  };

  return (
    <div className="page_entiere">
      <div className="wrapper">
        <form action="">
          <h1>Espace professeur</h1>

          <input
            className="firstName"
            type="text"
            name="Prénom"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Prénom"
          />
          <input
            className="lastName"
            type="text"
            name="Nom"
            placeholder="Nom"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            className="course"
            type="text"
            name="Cours"
            placeholder="cours"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />

          {/*Lien vers la page de saisie des abscences  */}
          <Link to="/welc">
            <button type="submit" onClick={submitHandker}>
              Suivant
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default AuthProf;
