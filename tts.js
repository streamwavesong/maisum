import axios from 'axios';

export default async function handler(req, res) {
  const { text } = req.query;

  const voiceId = "Rachel"; // Ou ID da voz da sua escolha
  const apiKey = process.env.ELEVENLABS_API_KEY;

  try {
    const response = await axios.post(
      `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
      { text, voice_settings: { stability: 0.5, similarity_boost: 0.5 } },
      {
        headers: {
          "xi-api-key": apiKey,
          "Content-Type": "application/json",
          "Accept": "audio/mpeg"
        },
        responseType: 'arraybuffer'
      }
    );

    res.setHeader('Content-Type', 'audio/mpeg');
    res.send(response.data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro na geração da locução' });
  }
}