import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Método não permitido' });
  }

  const dataFile = path.join(process.cwd(), 'data', 'data.json');
  const body = req.body;

  try {
    const existing = fs.existsSync(dataFile)
      ? JSON.parse(fs.readFileSync(dataFile, 'utf8'))
      : { registros: [] };

    existing.registros.push(body);

    fs.writeFileSync(dataFile, JSON.stringify(existing, null, 2), 'utf8');

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Erro ao salvar dados:', error);
    return res.status(500).json({ success: false, message: 'Erro interno' });
  }
}
