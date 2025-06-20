const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const axios = require('axios');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/api/generate', async (req, res) => {
  const { prompt } = req.body;

  try {
    const geminiRes = await axios.post(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' + process.env.GEMINI_API_KEY,
      {
        contents: [
          {
            role: 'user',
            parts: [
              { text: `أنت مساعد تسويق ذكي متخصص في السوق المصري والخليجي. اسمك سامر AI. استخدم اللغة العربية دائمًا وطبّق مهارات SMMA 5.0 بالكامل.

${prompt}` },
            ],
          },
        ],
      }
    );

    const result = geminiRes.data.candidates?.[0]?.content?.parts?.[0]?.text || '❌ لم يتم الحصول على رد مناسب.';
    res.json({ result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
