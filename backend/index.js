const express = require("express"); // Importa a biblioteca Express para criar o servidor

const bodyParser = require("body-parser"); // Importa o body-parser para processar o corpo das requisições JSON

const cors = require("cors"); // Importa o CORS para permitir requisições de diferentes origens (front-end e back-end)

const { google } = require("googleapis"); // Importa a API do Google

const keys = require("../backend/credentials.json"); // Importa o arquivo de credenciais JSON da Service Account do Google

const app = express(); // Cria uma instância do Express

app.use(cors()); // Ativa o CORS para permitir requisições de outros domínios

app.use(bodyParser.json()); // Configura o body-parser para aceitar requisições JSON

// Configuração do cliente JWT para autenticação com Google Sheets
const client = new google.auth.JWT({
    email: keys.client_email,       // E-mail da service account
    key: keys.private_key,          // Chave privada da service account
    scopes: ["https://www.googleapis.com/auth/spreadsheets"] // Permissão de acesso
});

// ID da planilha que será manipulada (substitua pelo seu ID real)
const spreadsheetId = "1LVh2ApF6tCoj9wkAOIgPlOCg7MuRhY3p7e6HXgOFnK0"; 

// Função para validar se o e-mail está no formato correto
function is_valid_email(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expressão regular para validar e-mails

    return re.test(email); // Retorna true se o e-mail estiver correto, false caso contrário
}

// Função para verificar se o e-mail já existe na coluna B da planilha
async function email_exist(email, sheets) {
    // Lê os valores da coluna B
    const res = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range: "B:B"
    });

    const emails = res.data.values ? res.data.values.flat() : []; // Flatten transforma array de arrays em array simples
    
    return emails.includes(email); // Retorna true se o e-mail já estiver presente
}

// Rota POST para receber e-mails do front-end
app.post("/add-email", async (req, res) => {
    console.log("Body recebido:", req.body); // Mostra os dados recebidos no console
    
    const { email, first_name, last_name, telefone, descricao } = req.body; // Desestrutura email e nome do corpo da requisição
    
    // Valida o formato do e-mail
    if (!is_valid_email(email)) {
        return res.status(400).json({ status: "error", message: "Email inválido."});
    }

    try {
        // Autentica com Google usando a service account
        await client.authorize();
        const sheets = google.sheets({ version: "v4", auth: client });

        // Verifica se o e-mail já existe na planilha
        if (await email_exist(email, sheets)) {
            return res.status(400).json({ status: "error", message: "Email já existente."});
        }

        // Adiciona o e-mail, nome e data/hora na planilha (colunas A, B e C)
        await sheets.spreadsheets.values.append({
            spreadsheetId,
            range: "A:F",
            valueInputOption: "RAW",
            resource: {
                values: [[email, first_name, last_name, telefone, descricao, new Date().toISOString()]],
            },
        });
        
        // Retorna sucesso para o cliente
        res.json({ status: "success", message: "Email salvo com sucesso!" });
    } catch (err) {
        console.error(err); // Mostra erro no console
        res.status(500).json({ status: "error", message: "Erro ao salvar email." }); // Retorna erro de servidor
    }
});


const PORT = 5000; // Define a porta que o servidor vai rodar

// Inicializa o servidor e exibe mensagem no console
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
