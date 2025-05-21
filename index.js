import { useState } from 'react';

export default function Home() {
  const [audio, setAudio] = useState(null);
  const [started, setStarted] = useState(false);
  const [loading, setLoading] = useState(false);

  const startRadio = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/tts?text=Bem-vindo ao StreamWave!');
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const newAudio = new Audio(url);
      newAudio.play();
      setAudio(newAudio);
      setStarted(true);
    } catch (error) {
      console.error("Erro ao gerar locução:", error);
    }
    setLoading(false);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '25vh' }}>
      <h1>StreamWave</h1>
      {!started ? (
        <button
          onClick={startRadio}
          disabled={loading}
          style={{
            padding: '10px 20px',
            fontSize: '18px',
            borderRadius: '8px',
            backgroundColor: '#0070f3',
            color: 'white',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          {loading ? 'Carregando...' : 'Iniciar Rádio'}
        </button>
      ) : (
        <p>Rádio tocando com locução</p>
      )}
    </div>
  );
}