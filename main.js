const texto = "Bem-vindo à trilha de verão da StreamWave!";
fetch("https://api.elevenlabs.io/v1/text-to-speech/EXAVITQu4vr4xnSDxMaL/stream", {
  method: "POST",
  headers: {
    "xi-api-key": import.meta.env.VITE_ELEVEN_API_KEY,
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    text: texto,
    voice_settings: { stability: 0.5, similarity_boost: 0.5 }
  })
})
.then(response => response.blob())
.then(audioBlob => {
  const audio = new Audio(URL.createObjectURL(audioBlob));
  audio.play();
});
