import { Container, Row, Col, Tab, Nav } from "react-bootstrap"; 
import { ProjectCard } from "./project_card";
import TrackVisibility from "react-on-screen"; 
import "animate.css"; 

import "../projects/projects.css";
import project_img1 from "../../assets/img/instagram.svg";

export const Project = () => {
    const projects = [
        {
        title: "Optimization functions application",
        description: "Optimization algorithms in a real problem",
        imgUrl: project_img1,
        },
    ];

    return (
        // Seção principal dos projetos, com id para navegação via hash
        <section className="project" id="projects">
            <Container> {/* Container bootstrap centralizado */}

                <Row>
                <Col size={12}> {/* Coluna única ocupando toda largura */}
                    {/* TrackVisibility observa se o conteúdo está visível na tela para aplicar animação */}
                    <TrackVisibility>
                    {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        {/* Título da seção */}
                        <h2>Projects</h2>

                        {/* Descrição da seção */}
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</p>

                        {/* Container de abas (Tabs) para organizar o conteúdo */}
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">

                            {/* Navegação das abas */}
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab 1</Nav.Link> {/* Aba 1 */}
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab 2</Nav.Link> {/* Aba 2 */}
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Tab 3</Nav.Link> {/* Aba 3 */}
                            </Nav.Item>
                            </Nav>

                            {/* Conteúdo das abas */}
                            <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                            
                            {/* Conteúdo da aba "first" */}
                            <Tab.Pane eventKey="first">
                                <Row>
                                {
                                    // Mapeia a lista de projetos para renderizar os cards de projeto
                                    projects.map((project, index) => (
                                    <ProjectCard
                                        key={index} // Chave única para cada componente da lista
                                        {...project} // Passa title, description e img_url para o ProjectCard
                                    />
                                    ))
                                }
                                </Row>
                            </Tab.Pane>

                            {/* Conteúdo da aba "second" */}
                            <Tab.Pane eventKey="second">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                            </Tab.Pane>

                            {/* Conteúdo da aba "third" */}
                            <Tab.Pane eventKey="third">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
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

