import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, img_url}) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={img_url} />

                <div className="proj-txtx">
                    <h4> {title} </h4>

                    <span> {description} </span>
                </div>
            </div>
        </Col>
    );
};