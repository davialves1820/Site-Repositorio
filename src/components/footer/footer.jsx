import { Container, Row, Col } from "react-bootstrap"; // Layout responsivo do Bootstrap
import logo from "../../assets/img/logo.svg"; // Logo do site
import instagram from "../../assets/img/instagram.svg"; 
import linkedin from "../../assets/img/linkedin.svg"; 
import github from "../../assets/img/github.svg";
import "../footer/footer.css"

export const Footer = () => {
    return (
        <footer className="footer"> {/* Define o rodapé do site */}
        <Container> {/* Componente Bootstrap que centraliza e limita a largura */}
            <Row className="align-items-center"> {/* Alinha verticalmente os elementos */}

            {/* Coluna da logo */}
            <Col size={12} sm={6}> {/* Em telas pequenas ocupa 6 das 12 colunas (metade) */}
                <img src={logo} alt="Logo" /> {/* Exibe o logo da aplicação */}
            </Col>

            {/* Coluna com ícones sociais e direitos autorais */}
            <Col size={12} sm={6} className="text-center text-sm-end">
                <div className="social-icon">
                {/* Ícones clicáveis que levam às redes sociais */}
                <a href="https://www.linkedin.com/in/davi-rodrigues-36750b2a5/"><img src={linkedin} alt="Icon" /></a>
                <a href="https://www.instagram.com/davi_alves1820/"><img src={instagram} alt="Icon" /></a>
                <a href="https://github.com/davialves1820?tab=repositories"><img src={github} alt="Icon" /></a>
                </div>
                {/* Texto de direitos autorais */}
                <p>Copyright {new Date().getFullYear()}. All Rights Reserved</p>
            </Col>

            </Row>
        </Container>
        </footer>
    )
}

