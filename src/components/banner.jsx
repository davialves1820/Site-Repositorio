import { useState, useEffect } from "react"; // Hooks do React
import { Container, Row, Col } from "react-bootstrap"; // Layout responsivo do Bootstrap
import { ArrowRightCircle } from 'react-bootstrap-icons'; // Ícone de seta
import 'animate.css'; // Biblioteca de animações CSS
import TrackVisibility from 'react-on-screen'; // Componente que detecta quando algo está visível na tela

import personagem from "../assets/img/personagem.png" // Imagem do personagem

export const Banner = () => {
    // Estados para controlar a animação de digitação
    const [loop_num, set_loop_num] = useState(0); // Controla qual palavra do array está sendo exibida
    const [is_deleting, set_is_deleting] = useState(false); // Indica se estamos apagando o texto
    const [text, set_text] = useState(''); // Texto atual exibido
    const [delta, set_delta] = useState(300 - Math.random() * 100); // Intervalo de tempo entre cada letra
    const [index, set_index] = useState(1); // Índice da letra atual (usado no efeito de digitação)

    const to_rotate = ["Web Developer", "SoftWare Engineer"]; // Palavras que serão rotacionadas na animação
    const period = 2000; // Tempo de espera ao final da digitação antes de apagar

    // Hook useEffect que atualiza o texto de forma periódica
    useEffect(() => {
        let ticker = setInterval(() => {
        tick(); // Função que altera o texto
        }, delta); // Executa com intervalo definido em 'delta'

        // Limpa o intervalo ao desmontar o componente ou atualizar o texto
        return () => { clearInterval(ticker) };
    }, [text]); // Executa sempre que o 'text' muda

    // Função que implementa o efeito de digitação/apagamento
    const tick = () => {
        let i = loop_num % to_rotate.length; // Escolhe qual palavra está sendo exibida
        let fullText = to_rotate[i]; // Palavra atual
        let updated_text = is_deleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1); // Apaga uma letra : Adiciona uma letra

        set_text(updated_text); // Atualiza o texto

        // Se estiver apagando, acelera o intervalo
        if (is_deleting) {
            set_delta(prevDelta => prevDelta / 2);
        }

        // Se terminou de digitar a palavra completa
        if (!is_deleting && updated_text === fullText) {
            set_is_deleting(true); // Começa a apagar
            set_index(prevIndex => prevIndex - 1); // Ajusta o índice
            set_delta(period); // Espera um tempo antes de apagar
        }

        // Se terminou de apagar tudo
        else if (is_deleting && updated_text === '') {
            set_is_deleting(false); // Começa a digitar a próxima
            set_loop_num(loop_num + 1); // Passa para a próxima palavra
            set_index(1); // Reinicia o índice
            set_delta(500); // Define um novo tempo de digitação
        }
        else {
            set_index(prev_index => prev_index + 1); // Continua o efeito
        }
    }

    return (
        <section className="banner" id="home">
        <Container>
            <Row className="aligh-items-center">
            {/* Coluna do texto */}
            <Col xs={12} md={6} xl={7}>
                <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>
                    {`Hi! I'm Davi`}{" "}
                    <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'>
                        <span className="wrap">{text}</span> {/* Mostra o texto que está sendo animado */}
                    </span>
                    </h1>
                    <p>
                    I'm 20 years old, from Paraíba, and currently studying Computer Science at UFPB. I'm passionate about technology and programming, always seeking to expand my knowledge and develop creative solutions that make an impact.
                    </p>
                    {/* Botão com ícone */}
                    <button onClick={() => console.log('connect')}>
                    Let’s Connect <ArrowRightCircle size={25} />
                    </button>
                </div>}
                </TrackVisibility>
            </Col>

            {/* Coluna da imagem */}
            <Col xs={12} md={6} xl={5}>
                <TrackVisibility>
                {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                    <img src={personagem} alt="Header Img" /> {/* Exibe a imagem do cabeçalho */}
                    </div>}
                </TrackVisibility>
            </Col>
            </Row>
        </Container>
        </section>
    )
}