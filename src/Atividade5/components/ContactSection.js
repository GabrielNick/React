import { useState } from 'react';
import '../Atv05.css';

const contacts = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' },
];

function ContactList({ selectedId, onSelect }) {
  return (
    <div className="contact-section">
      <div className="contact-list">
        {contacts.map((contact) => (
          <button
            key={contact.id}
            onClick={() => onSelect(contact.id)}
            className={contact.id === selectedId ? 'selected' : ''}
          >
            {contact.name}
          </button>
        ))}
      </div>
    </div>
  );
}

function Chat({ contact }) {
  const [text, setText] = useState('');

  const handleSend = () => {
    alert(`Mensagem enviada para ${contact.email} com sucesso!`);
    setText('');
  };

  return (
    <div className="chat-box">
      <h3>Chat to {contact.name}</h3>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={`Chat to ${contact.name}`}
      />
      <br />
      <button onClick={handleSend}>Send to {contact.email}</button>
    </div>
  );
}

export default function ContactSection() {
  const [selectedId, setSelectedId] = useState(0);
  const contact = contacts.find((c) => c.id === selectedId);

  return (
    <div className="component-container contact-chat-container">
      <h2>Componentes ContactList e Chat</h2>
      <div className="contact-chat-flex">
        <ContactList selectedId={selectedId} onSelect={setSelectedId} />
        <Chat key={contact.email} contact={contact} />
      </div>
    </div>
  );
}
