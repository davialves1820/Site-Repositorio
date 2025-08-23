import { Col } from "react-bootstrap";
import "../projects/projects.css";

export const ProjectCard = ({ title, description, imgUrl: img_url }) => {
  return (
    <Col xs={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={img_url} alt={title} />

        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};

