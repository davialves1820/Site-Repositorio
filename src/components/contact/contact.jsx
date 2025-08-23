import { useState, useEffect } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import contact_img from "../../assets/img/contact-img.svg"

import "../contact/contact.css"

export const Contact = () => {
    // Estado para os campos do formulário
    const [form_details, set_form_details] = useState({ first_name: "", last_name: "", email: "", telefone: "", descricao: ""});
    const [button_text, set_button_text] = useState('Enviar');
    const [status, set_status] = useState({});

    // Função para atualizar dinamicamente os campos do formulário, recebe o nome do campo (field) e o valor digitado (value)
    const onFormUpdate = (field, value) => {
        // Atualiza o estado formDetails copiando os campos atuais (...formDetails) e substituindo apenas o campo informado por 'value'
        set_form_details({ ...form_details, [field]: value });
    };

    // Função assíncrona para enviar os dados para o backend
    const handle_submit = async (e) => {
        e.preventDefault(); // Evita o recarregamento da página ao enviar o formulário
        set_button_text("Enviando..."); // Atualiza o texto do botão para indicar que está enviando

        try {
            // Faz uma requisição POST para o backend
            const res = await fetch("http://localhost:5000/add-email", {
                method: "POST", // Método HTTP
                headers: { "Content-Type": "application/json" }, // Define o tipo do corpo como JSON
                body: JSON.stringify(form_details), // Converte os dados do formulário em JSON
            });

            // Lê a resposta do backend já convertida em objeto
            const data = await res.json();
            set_button_text("Enviar"); // Restaura o texto do botão para "Enviar"

            if (res.ok) { // Se a resposta for OK (status 200-299), exibe mensagem de sucesso
                set_status({ success: true, message: data.message });
                set_form_details({first_name: "", last_name: "", email: "", telefone: "", descricao: ""}); // Limpa todos os campos do formulário
            } else { // Se houver erro no backend, exibe mensagem de erro recebida
                set_status({ success: false, message: data.message });
            }

        } catch (err) { // Caso ocorra erro na comunicação (ex: servidor offline)
            set_button_text("Enviar"); // Restaura o botão
            set_status({ success: false, message: "Erro ao enviar!" }); // Mensagem genérica de erro
        }
    };

    // Hook para sumir com a mensagem após o clique do botão enviar
    useEffect(() => {
        if (status.message) {
            const timer = setTimeout(() => {
                set_status({ success: false, message: "" }); // Limpa a mensagem
            }, 3000); // 3 segundos

            return () => clearTimeout(timer); // Evita memory leak
        }
        }, [status.message])

    return (
        <section className="contact" id="connect">
        <Container>
            <Row className="align-items-center">
            <Col size={12} md={6}>
                <TrackVisibility>
                {({ isVisible }) =>
                    <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contact_img} alt="Contact Us"/>
                }
                </TrackVisibility>
            </Col>
            <Col size={12} md={6}>
                <TrackVisibility>
                    {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        <h2 style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            Fale Conosco
                            {status.message && (
                                <Alert variant={status.success ? "success" : "danger"} 
                                style={{
                                    padding: "4px 8px",  // espaço interno menor
                                    fontSize: "1.6rem",  // fonte menor
                                    margin: 0,
                                    display: "inline-block"
                                }}>
                                    {status.message}
                                </Alert>
                            )}
                        </h2>
                        <form onSubmit={handle_submit}>
                            <Row>
                            <Col size={12} sm={6} className="px-1">
                                <input
                                type="text"
                                value={form_details.first_name}
                                placeholder="First name"
                                onChange={(e) => onFormUpdate('first_name', e.target.value)}
                                required
                                />
                            </Col>
                            <Col size={12} sm={6} className="px-1">
                                <input
                                type="text"
                                value={form_details.last_name}
                                placeholder="Last name"
                                onChange={(e) => onFormUpdate('last_name', e.target.value)}
                                required
                                />
                            </Col>
                            <Col size={12} sm={6} className="px-1">
                                <input
                                type="email"
                                value={form_details.email}
                                placeholder="Seu email"
                                onChange={(e) => onFormUpdate('email', e.target.value)}
                                required
                                />
                            </Col>
                            <Col size={12} sm={6} className="px-1">
                                <input
                                type="tel"
                                value={form_details.telefone}
                                placeholder="Seu número"
                                onChange={(e) => onFormUpdate('telefone', e.target.value)}
                                required
                                />
                            </Col>
                            <Col size={12} className="px-1">
                                <textarea rows="6" value={form_details.descricao} placeholder="Message" onChange={(e) => onFormUpdate('descricao', e.target.value)}></textarea>
                                <button type="submit"><span>{button_text}</span></button>
                            </Col>
                            
                            </Row>
                        </form>
                        </div>
                    }
                </TrackVisibility>
            </Col>
            </Row>
        </Container>
        </section>
    );
};
