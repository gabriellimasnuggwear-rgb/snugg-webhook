// api/webhook.js
let memoria = [];

export default function handler(req, res) {
  if (req.method === "POST") {
    try {
      const dados = req.body;
      dados.timestamp = new Date().toISOString();

      memoria.push(dados);

      return res.status(200).json({
        success: true,
        message: "Dados recebidos com sucesso",
        data: dados
      });
    } catch (error) {
      console.error("Erro:", error);
      return res.status(500).json({ success: false, message: "Erro interno" });
    }
  } else if (req.method === "GET") {
    return res.status(200).json(memoria);
  } else {
    return res.status(405).json({ success: false, message: "Método não permitido" });
  }
}
