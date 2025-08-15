import { useState } from "react";

export default function EmailForm() {
    const [email, setEmail] = useState("");
    const [nome, setNome] = useState("");
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
        const res = await fetch("http://localhost:5000/add-email", {
            method: "POST",
            body: JSON.stringify({ email, nome }),
        });

        const data = await res.json();
        setStatus(data.message);
        setEmail("");
        setNome("");
        } catch (error) {
        setStatus("Erro ao enviar!");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
        />
        <input
            type="email"
            placeholder="Seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
        />
        <button type="submit">Enviar</button>
        <p>{status}</p>
        </form>
    );
}
