import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./project_card";
import TrackVisibility from "react-on-screen";
import "animate.css";
import project_img1 from "../assets/img/instagram.svg";

export const Project = () => {
    const projects = [
        {
            title: "Otimization functions application",
            description: "Otimization algorotihms in a real problem",
            img_url: project_img1,
        }
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({isVisible}) =>
                                <div className={isVisible ? "animate__animated animated__fadeIn" : ""}>
                                    <h2>Projects</h2>

                                    <p>jvanjnfnvjasnjawrfbsfhkbfshkvbafhbfkaufoabvsjhfskjhouwhuofbewobcoabncowhaouh</p>

                                    <Tab.Container id="projects-tab" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                            </Nav.Item>
                                        </Nav>

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