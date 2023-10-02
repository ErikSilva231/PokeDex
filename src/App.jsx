import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Home from "./views/Home";
import Pokemon from "./views/Pokemon";
import Notfound from "./views/NotFound";
import pokedex from "./assets/pokedex.gif";
import pokeball from "./assets/pokeball.png";
import PokemonDetails from "./views/PokemonDetails"; 


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar expand="lg" className="bg-dark">
          <Container>
            <Navbar.Brand>
              <NavLink
                className={({ isActive }) => (isActive ? "Active" : "noActive")}
                to="/"
              >
                <img
                  src={pokedex}
                  alt="logo pokebola gif"
                  width="50%"
                  className="img-fluid"
                />
              </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "Active" : "noActive"
                    }
                    to="/"
                  >
                    🏠 Inicio
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "Active" : "noActive"
                    }
                    to="/pokemon"
                  >
                    <img
                      src={pokeball}
                      alt="pokeball"
                      width="11%"
                      className="img-fluid"
                    />{" "}
                    Pokemon
                  </NavLink>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/pokemon/" element={<Pokemon></Pokemon>} />
          <Route path="/pokemon/:name?" element={<PokemonDetails />} />
          <Route path="*" element={<Notfound></Notfound>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
