# Meu Portfólio de Contato

Este projeto é um site de portfólio e contato pessoal, construído com foco em uma interface limpa e moderna. O objetivo dele é mostrar um pouco do conhecimento na área, como linguagens, tecnologias e projetos.

---

## 💻 Tecnologias Utilizadas

* **Frontend:**
    * React.js
    * Vite
    * CSS

* **Backend:**
    * Node.js
    * Express
    * Google Sheets API

---

## 🚀 Funcionalidades

O projeto é dividido em componentes React para uma organização modular e fácil manutenção. As principais seções e suas funcionalidades são:

* **`banner.jsx`**: A seção de destaque na parte superior do site, geralmente com uma saudação e uma introdução.
* **`nav_bar.jsx`**: A barra de navegação que permite ao usuário se mover entre as seções do site.
* **`contact.jsx`**: A seção "Fale Conosco", que contém um formulário para contato. Este formulário coleta o nome completo, e-mail, telefone e uma mensagem do usuário.
* **`footer.jsx`**: O rodapé do site, contendo links sociais e informações adicionais.
* **`projects.jsx`**: Uma seção para listar e exibir projetos.
* **`skills.jsx`**: Uma seção para apresentar habilidades técnicas.

---

## ⚙️ Backend: Node.js e Google Sheets API

O backend do projeto é uma API RESTful construída com Node.js e Express. Sua principal função é processar os dados enviados pelo formulário de contato do front-end e armazená-los em uma planilha do Google Sheets.

### Como funciona:

1.  O servidor Node.js utiliza a biblioteca `googleapis` para se autenticar em uma planilha do Google Sheets através de uma **Service Account**.
2.  Uma rota POST (`/add-email`) recebe os dados do formulário de contato.
3.  O servidor realiza uma validação de e-mail para garantir que o formato está correto.
4.  É feita uma verificação na planilha para evitar a duplicação de e-mails.
5.  Se o e-mail for válido e não estiver duplicado, os dados (e-mail, nome, telefone, mensagem e data/hora) são anexados a uma nova linha na planilha.
6.  O servidor retorna uma resposta de sucesso ou erro para o front-end, que exibe uma mensagem para o usuário.

Esta abordagem elimina a necessidade de um banco de dados tradicional, utilizando uma ferramenta familiar e de fácil acesso como o Google Sheets para gerenciar os contatos.

---

## 📦 Como Executar o Projeto

Para rodar este projeto localmente, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone [https://docs.github.com/articles/referencing-and-citing-content](https://docs.github.com/articles/referencing-and-citing-content)
    cd nome-do-projeto
    ```

2.  **Instale as dependências:**
    * Para o frontend:
        ```bash
        cd caminho/para/o/frontend
        npm install
        ```
    * Para o backend:
        ```bash
        cd caminho/para/o/backend
        npm install
        ```

3.  **Configure o backend:**
    * Crie um arquivo `credentials.json` no diretório `backend` com as credenciais da sua Service Account do Google. Certifique-se de compartilhar a planilha do Google Sheets com o e-mail da sua Service Account.

4.  **Inicie o servidor de desenvolvimento:**
    * Para o frontend:
        ```bash
        cd caminho/para/o/frontend
        npm run dev
        ```
    * Para o backend:
        ```bash
        cd caminho/para/o/backend
        node index.js
        ```

---
