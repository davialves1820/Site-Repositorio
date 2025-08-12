// Importa hooks e componentes necessários do React e de bibliotecas auxiliares
import { useState, useEffect } from "react"; // Hooks do React
import { Container, Row, Col } from "react-bootstrap"; // Layout responsivo do Bootstrap
import { ArrowRightCircle } from 'react-bootstrap-icons'; // Ícone de seta
import 'animate.css'; // Biblioteca de animações CSS
import TrackVisibility from 'react-on-screen'; // Componente que detecta quando algo está visível na tela

export const Banner = () => {
    // Estados para controlar a animação de digitação
    const [loopNum, setLoopNum] = useState(0); // Controla qual palavra do array está sendo exibida
    const [isDeleting, setIsDeleting] = useState(false); // Indica se estamos apagando o texto
    const [text, setText] = useState(''); // Texto atual exibido
    const [delta, setDelta] = useState(300 - Math.random() * 100); // Intervalo de tempo entre cada letra
    const [index, setIndex] = useState(1); // Índice da letra atual (usado no efeito de digitação)

    // Palavras que serão rotacionadas na animação
    const toRotate = ["Web Developer", "SoftWare Engineer"];
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
        let i = loopNum % toRotate.length; // Escolhe qual palavra está sendo exibida
        let fullText = toRotate[i]; // Palavra atual
        let updatedText = isDeleting
        ? fullText.substring(0, text.length - 1) // Apaga uma letra
        : fullText.substring(0, text.length + 1); // Adiciona uma letra

        setText(updatedText); // Atualiza o texto

        // Se estiver apagando, acelera o intervalo
        if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
        }

        // Se terminou de digitar a palavra completa
        if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true); // Começa a apagar
        setIndex(prevIndex => prevIndex - 1); // Ajusta o índice
        setDelta(period); // Espera um tempo antes de apagar
        }
        // Se terminou de apagar tudo
        else if (isDeleting && updatedText === '') {
        setIsDeleting(false); // Começa a digitar a próxima
        setLoopNum(loopNum + 1); // Passa para a próxima palavra
        setIndex(1); // Reinicia o índice
        setDelta(500); // Define um novo tempo de digitação
        }
        else {
        setIndex(prevIndex => prevIndex + 1); // Continua o efeito
        }
    }

    // JSX de retorno: define a estrutura visual da seção "banner"
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
                    Lorem Ipsum é um texto fictício usado na indústria gráfica. Ele tem sido usado como padrão desde o século XVI.
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
                    <img src="" alt="Header Img" /> {/* Exibe a imagem do cabeçalho */}
                    </div>}
                </TrackVisibility>
            </Col>
            </Row>
        </Container>
        </section>
    )
}