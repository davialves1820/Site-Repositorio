// Importando hooks do React e componentes do React-Bootstrap
import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

// Componente Newsletter recebe props: status, message, on_validated
export const Newsletter = ({ status, message, onValidated: on_validated }) => {
  // Hook para armazenar o e-mail digitado pelo usuário
  const [email, set_email] = useState('');

  // useEffect: quando o status for "success", limpa o campo de email
  useEffect(() => {
    if (status === 'success') clear_fields();
  }, [status]);

  // Função chamada ao submeter o formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Impede o recarregamento da página

    // Verifica se há email e se contém "@" (validação básica)
    if (email && email.indexOf("@") > -1) {
      on_validated({
        EMAIL: email, // Chama a função passada por prop com o email
      });
    }
  };

  // Função para limpar o campo de email
  const clear_fields = () => {
    set_email('');
  };

  // Renderização do componente
  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          {/* Coluna da esquerda com o texto e os alertas */}
          <Col lg={12} md={6} xl={5}>
            <h3>
              Subscribe to our Newsletter<br /> & Never miss latest updates
            </h3>

            {/* Alertas dinâmicos com base no status da inscrição */}
            {status === 'sending' && <Alert>Sending...</Alert>}
            {status === 'error' && <Alert variant="danger">{message}</Alert>}
            {status === 'success' && <Alert variant="success">{message}</Alert>}
          </Col>

          {/* Coluna da direita com o formulário de inscrição */}
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                {/* Campo de input controlado */}
                <input
                  value={email}
                  type="email"
                  onChange={(e) => set_email(e.target.value)}
                  placeholder="Email Address"
                />
                {/* Botão de envio */}
                <button type="submit">Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
