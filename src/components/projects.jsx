import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./project_card";
import TrackVisibility from "react-on-screen";
import "animate.css";

export const Project = () => {
    const projects = [
        {
            title: "Otimization functions application",
            description: "Otimization algorotihms in a real problem",
            img_url: "",
        }
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({is_visivble}) =>
                                <div className={is_visivble ? "animate__animated animated__fadeIn" : ""}>
                                    <h2>Projects</h2>

                                    <p>jvanjnfnvjasnjawrfbsfhkbfshkvbafhbfkaufoabvsjhfskjhouwhuofbewobcoabncowhaouh</p>

                                    <Tab.Container id="projects-tab" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                            </Nav.Item>
                                        </Nav>

                                        <Tab.Container id="slideinUp" className={is_visivble ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        projects.map((project, index) => (
                                                            <ProjectCard key={index} {...project} />
                                                        )) 
                                                    }
                                                </Row>
                                            </Tab.Pane>

                                            
                                        </Tab.Container>
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