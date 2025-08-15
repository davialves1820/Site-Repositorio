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

// Rota para receber e-mails
app.post("/add-email", async (req, res) => {
    console.log("Body recebido:", req.body);
    const { email, nome } = req.body;
    try {
        await client.authorize();
        const sheets = google.sheets({ version: "v4", auth: client });
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
