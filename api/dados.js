// api/dados.js
import handler from "./webhook.js";

export default function dados(req, res) {
  // Retorna os dados em memória do webhook
  if (req.method === "GET") {
    return handler({ method: "GET" }, res);
  } else {
    return res.status(405).json({ message: "Apenas GET permitido" });
  }
}
