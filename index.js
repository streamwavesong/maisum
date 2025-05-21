import { useState } from 'react';

export default function Home() {
  const [audio, setAudio] = useState(null);
  const [started, setStarted] = useState(false);

  const startRadio = () => {
    const streamUrl = "/stream.mp3"; // Substitua com a URL do seu stream real
    const newAudio = new Audio(streamUrl);
    newAudio.play();
    setAudio(newAudio);
    setStarted(true);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '25vh' }}>
      <h1>StreamWave</h1>
      {!started ? (
        <button
          onClick={startRadio}
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
          Iniciar Rádio
        </button>
      ) : (
        <p>Rádio tocando...</p>
      )}
    </div>
  );
}