import { useState, useEffect } from "react"; // Hooks do React (npm install react-router-hash-link)
import { Navbar, Nav, Container } from "react-bootstrap"; // Componentes do React-Bootstrap
import { HashLink } from "react-router-hash-link"; // HashLink correto
import { BrowserRouter as Router } from "react-router-dom"; // Router do React Router

import logo from "../../assets/img/logo.svg";
import instagram_icon from "../../assets/img/instagram.svg";
import linkedin_icon from "../../assets/img/linkedin.svg";
import github_icon from "../../assets/img/github.svg";

import "../nav_bar/nav_bar.css"

export const NavBar = () => {
    const [active_link, set_active_link] = useState("home"); // Link ativo
    const [scrolled, set_scrolled] = useState(false); // Navbar rolada

    // Hook useEffect para verificar a rolagem da tela e aplicar classe css
    useEffect(() => {
        const on_scroll = () => {
        if (window.scrollY > 50) {
            set_scrolled(true);
        } else {
            set_scrolled(false);
        }
        };

        window.addEventListener("scroll", on_scroll);

        return () => window.removeEventListener("scroll", on_scroll);
    }, []);

    const on_update_active_link = (value) => {
        set_active_link(value); // Atualiza o estado com o link clicado
    };

    return (
        <Router>
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container>
            <Navbar.Brand href="/">
                <img src={logo} alt="Logo" />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav"> {/* Cria o botão hambúrguer que aparece quando a barra está colapsada */}
                <span className="navbar-toggler-icon"></span> {/* O atributo aria-controls indica qual elemento será aberto/fechado */}
            </Navbar.Toggle>

            {/* É a área que será mostrada ou escondida quando o usuário clicar no botão hambúrguer */}
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                <Nav.Link
                    href="#home"
                    className={
                    active_link === "home" ? "active navbar-link" : "navbar-link"
                    }
                    onClick={() => on_update_active_link("home")}
                >
                    Home
                </Nav.Link>

                <Nav.Link
                    href="#skills"
                    className={
                    active_link === "skills" ? "active navbar-link" : "navbar-link"
                    }
                    onClick={() => on_update_active_link("skills")}
                >
                    Skills
                </Nav.Link>

                <Nav.Link
                    href=""
                    className={
                    active_link === "projects" ? "active navbar-link" : "navbar-link"
                    }
                    onClick={() => on_update_active_link("projects")}
                >
                    Projects
                </Nav.Link>
                </Nav>

                <span className="navbar-text">
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/davi-rodrigues-36750b2a5/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin_icon} alt="linkedin icon" />
                    </a>
                    <a href="https://www.instagram.com/davi_alves1820/" target="_blank" rel="noopener noreferrer">
                    <img src={instagram_icon} alt="instagram icon" />
                    </a>
                    <a href="https://github.com/davialves1820?tab=repositories" target="_blank" rel="noopener noreferrer">
                    <img src={github_icon} alt="github icon" />
                    </a>
                </div>

                <HashLink to="#connect">
                    <button className="vvd">
                    <span>Let's Connect</span>
                    </button>
                </HashLink>
                </span>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        </Router>
    );
};
