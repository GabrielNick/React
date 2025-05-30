import { useState } from 'react';
import '../Atv05.css';

export default function FormQuiz() {
  const [answer, setAnswer] = useState('');
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(answer.toLowerCase().trim() === 'lima' ? 'correto' : 'incorreto');
  };

  return (
    <form onSubmit={handleSubmit} className="component-container">
      <h2>Quiz da Cidade</h2>
      <p>Em qual cidade há um outdoor que transforma o ar em água potável?</p>
      <input
        type="text"
        className="formquiz-input"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <button type="submit" disabled={answer.length === 0}>Enviar</button>
      {status === 'correto' && <p className="feedback success">✅ Correto!</p>}
      {status === 'incorreto' && <p className="feedback error">❌ Tente novamente.</p>}
    </form>
  );
}
