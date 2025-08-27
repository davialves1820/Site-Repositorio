import { Container, Row, Col, Tab, Nav } from "react-bootstrap"; 
import { ProjectCard } from "./project_card";
import TrackVisibility from "react-on-screen"; 
import "animate.css"; 

import "../projects/projects.css";
import project_img1 from "../../assets/img/mapa_algoritmo_genetico.png";
import project_img2 from "../../assets/img/Popular_movies.png";
import project_img3 from "../../assets/img/avatar.png";

export const Project = () => {
    const projects = [
        {
        title: "Practical application of optimization functions",
        description: "This project demonstrates the application of optimization algorithms to solve the Traveling Salesman Problem (TSP) in a real-world application in the city of João Pessoa, Paraíba. The objective is to find the shortest route to visit a set of tourist attractions and return to the starting point.The project uses the OSMnx library to model the city's street network as a graph. Three optimization algorithms—Hill Climbing, Simulated Annealing, and Genetic Algorithm—are implemented to find the most efficient route. The performance of each algorithm is compared to a random initial route, and the results are visualized on city maps.",
        imgUrl: project_img1,
        },
        {
        title: "Popular Movies",
        description: "A simple website that consumes the TMDb API to list popular movies, allows you to search by name and mark movies as favorites using localStorage.",
        imgUrl: project_img2,
        },
        {
        title: "Avatar Characters Viewer",
        description: "A Django project that consumes the public API of the Avatar: The Last Airbender universe and displays a list of characters with their images, affiliations, allies, and enemies. It also allows you to search for characters by name.",
        imgUrl: project_img3,
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
                        <p>Here you'll find some of my personal projects, designed to practice skills, explore new technologies, and put ideas into practice.</p>

                        {/* Container de abas (Tabs) para organizar o conteúdo */}
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">

                            {/* Navegação das abas */}
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab 1</Nav.Link> {/* Aba 1 */}
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

