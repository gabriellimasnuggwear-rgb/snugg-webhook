export default function handler(req, res) {
  res.status(200).send(`
    <h2>✅ Webhook Snugg ativo!</h2>
    <p>Rotas disponíveis:</p>
    <ul>
      <li><b>POST</b> /api/webhook → Recebe dados</li>
      <li><b>GET</b> /api/dados → Retorna JSON</li>
    </ul>
  `);
}
