const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { google } = require("googleapis");
const keys = require("../backend/credentials.json"); // JSON baixado

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Configuração Google Sheets
const client = new google.auth.JWT({
    email: keys.client_email,
    key: keys.private_key,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"]
});

const spreadsheetId = "1LVh2ApF6tCoj9wkAOIgPlOCg7MuRhY3p7e6HXgOFnK0"; // substitua pelo ID da sua planilha

// Função para verificar se o email é válido
function is_valid_email(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return re.test(email);
}

// Função para verificar se o email já está na planilha
async function email_exist(email, sheets) {
    const re = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range: "B:B"
    });

    const emails = res.data.values ? res.data.values.flat() : [];
    
    return emails.includes(email);
}

// Rota para receber e-mails
app.post("/add-email", async (req, res) => {
    console.log("Body recebido:", req.body);
    
    const { email, nome } = req.body;
    
    if (!is_valid_email(email)) {
        return res.status(400).json({ status: "error", message: "Email inválido."});
    }

    try {
        await client.authorize();
        const sheets = google.sheets({ version: "v4", auth: client });

        if (email_exist(email, sheets)) {
            return res.status(400),json({ status: "error", message: "Email já existente."});
        }

        await sheets.spreadsheets.values.append({
            spreadsheetId,
            range: "A:C",
            valueInputOption: "RAW",
            resource: {
                values: [[email, nome, new Date().toISOString()]],
            },
        });
        
        res.json({ status: "success", message: "Email salvo com sucesso!" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ status: "error", message: "Erro ao salvar email." });
    }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
