import { Container, Row, Col, Tab, Nav } from "react-bootstrap"; // Importa componentes React-Bootstrap para layout, abas e navegação
import { ProjectCard } from "./project_card"; // Importa o componente de cartão de projeto para exibir projetos individuais
import TrackVisibility from "react-on-screen"; // Importa componente para detectar visibilidade de elementos na tela
import "animate.css"; // Importa animação CSS

import "../projects/projects.css"
// Importa imagens
import project_img1 from "../../assets/img/instagram.svg";

export const Project = () => {

    // Lista de projetos que serão exibidos
    const projects = [
        {
            title: "Otimization functions application",
            description: "Otimization algorotihms in a real problem",
            img_url: project_img1,
        }
    ];

    return (
        // Seção principal dos projetos com id para navegação via hash
        <section className="project" id="projects"> 
            <Container> {/* Container bootstrap centralizado */}
                <Row>
                    <Col size={12}>
                        <TrackVisibility> {/* TrackVisibility observa se o conteúdo está visível na tela para aplicar animação */}
                            {({isVisible}) =>
                                <div className={isVisible ? "animate__animated animated__fadeIn" : ""}>
                                    <h2>Projects</h2>

                                    <p>jvanjnfnvjasnjawrfbsfhkbfshkvbafhbfkaufoabvsjhfskjhouwhuofbewobcoabncowhaouh</p>

                                    <Tab.Container id="projects-tab" defaultActiveKey="first"> {/* Container de abas (Tabs) para organizar o conteúdo */}
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                            </Nav.Item>
                                        </Nav>

                                        {/* Conteúdo das abas */}
                                        <Tab.Content id="slideinUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        projects.map((project, index) => (
                                                            <ProjectCard key={index} {...project} />
                                                        )) 
                                                    }
                                                </Row>
                                            </Tab.Pane>


                                        </Tab.Content>
                                    </Tab.Container>
                                </div>
                            } 
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};