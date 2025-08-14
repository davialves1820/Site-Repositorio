// Importação de componentes e imagens
import { Container, Row, Col } from "react-bootstrap"; // Layout responsivo do Bootstrap
import { MailchimpForm } from "./MailchimpForm"; // Componente de formulário para inscrição via Mailchimp
import logo from "../assets/img/logo.svg"; // Logo do site
import navIcon1 from "../assets/img/nav-icon1.svg"; // Ícone de rede social 1 (ex: LinkedIn)
import navIcon2 from "../assets/img/nav-icon2.svg"; // Ícone de rede social 2 (ex: Facebook)
import navIcon3 from "../assets/img/nav-icon3.svg"; // Ícone de rede social 3 (ex: Instagram)

export const Footer = () => {
    return (
        <footer className="footer"> {/* Define o rodapé do site */}
        <Container> {/* Componente Bootstrap que centraliza e limita a largura */}
            <Row className="align-items-center"> {/* Alinha verticalmente os elementos */}
            
            <MailchimpForm /> {/* Formulário de inscrição para newsletter (separado em outro componente) */}

            {/* Coluna da logo */}
            <Col size={12} sm={6}> {/* Em telas pequenas ocupa 6 das 12 colunas (metade) */}
                <img src={logo} alt="Logo" /> {/* Exibe o logo da aplicação */}
            </Col>

            {/* Coluna com ícones sociais e direitos autorais */}
            <Col size={12} sm={6} className="text-center text-sm-end">
                <div className="social-icon">
                {/* Ícones clicáveis que levam às redes sociais */}
                <a href="#"><img src={navIcon1} alt="Icon" /></a>
                <a href="#"><img src={navIcon2} alt="Icon" /></a>
                <a href="#"><img src={navIcon3} alt="Icon" /></a>
                </div>
                {/* Texto de direitos autorais */}
                <p>Copyright {new Date().getFullYear()}. All Rights Reserved</p>
            </Col>

            </Row>
        </Container>
        </footer>
    )
}

