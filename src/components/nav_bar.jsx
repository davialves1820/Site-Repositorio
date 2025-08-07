import {useState, useEffect} from "react"; // Hooks do react
import {Navbar, Nav, Container} from "react-bootstrap"; // Componentes do react-Bootstrap utilizados na barra de navegação
import {HashLink} from "react=router-hash-link"; // HashLink para navegação com âncoras suaves (scroll suave)
import {BrowserRouter as Router} from "react-router-dom"; // Importa o Router do React Router

export const NavBar = () => {
    const [active_link, set_active_link] = useState("home"); // Estado que controla qual link da navbar está ativo
    const [scrolled, set_scrolled] = useState(false); // Estado que indica se a navbar está "rolada", para aplicar um estilo

    useEffect(() => {
        const on_scroll = () => {
            // Se o usuário rolar mais de 50px, muda o estado para aplicar uma classe CSS
            if (window.scrollY > 50) {
                set_scrolled(true);
            } else {
                set_scrolled(false);
            }
        }

        window.addEventListener("scroll", on_scroll); // Adiciona o evento de scroll ao carregar o componente

        return () => window.removeEventListener("scroll", onscroll); // Remove o evento quando o componente for desmontado

    }, [])

    const on_update_active_link = (value) => {
        set_active_link(value); // Atualiza o estado com o link clicado
    }

    return (
        <Router> {/* Envolve a navbar com o Router para permitir navegação */}
            <NavBar expand="md" className={scrolled ? "scrolled" : ""}>
                <Container>
                    <Navbar.Brand href="/"> {/* Logo com link para o topo ou home */}
                        <img src={""} alt="Logo"/>
                    </Navbar.Brand>

                    {/* Botão de menu colapsável para telas pequenas */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>

                </Container>
            </NavBar>
        </Router>
    )
}