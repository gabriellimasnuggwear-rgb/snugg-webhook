import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const dataFile = path.join(process.cwd(), 'data', 'data.json');

  try {
    const data = fs.existsSync(dataFile)
      ? JSON.parse(fs.readFileSync(dataFile, 'utf8'))
      : { registros: [] };

    res.status(200).json(data);
  } catch (error) {
    console.error('Erro ao ler dados:', error);
    res.status(500).json({ success: false, message: 'Erro interno' });
  }
}
