import React from "react";
import { Container } from "react-bootstrap";
import pikachu from "../assets/pikachu.png";
import "./Home.css";


function Home() {
  return (
    <>
    <Container fluid className=" pt-3 text-center">
        <Container>
          <p className="py-5 px-5 mx-5 h5 max-height-50 text-center">
            <h3>
              Bienvenido Maestro Pokemón
            </h3>
            En este sitio podrás escoger tu Pokemón y ver sus estadísticas.
          </p>
        </Container>
        </Container>
        <Container fluid className=" pt-3 text-center">

      <img
        src={pikachu}
        width="25%"
        alt="pikachu con gorra"
        className="img-fluid"
      />
      
      </Container>
    
     
    </>
  );
}

export default Home;
