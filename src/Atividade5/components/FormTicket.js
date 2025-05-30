import { useState } from 'react';
import '../Atv05.css';

export default function FormTicket() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <div className="component-container">
      <h2>Let’s check you in</h2>

      <div className="formticket-row">
        <label className="formticket-label">First name:</label>
        <input
          type="text"
          className="formticket-input"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <div className="formticket-row">
        <label className="formticket-label">Last name:</label>
        <input
          type="text"
          className="formticket-input"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <p>Your ticket will be issued to: <strong>{firstName} {lastName}</strong></p>
    </div>
  );
}
