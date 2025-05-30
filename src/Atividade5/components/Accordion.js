import { useState } from 'react';
import '../Atv05.css';

function AccordionItem({ title, content, isActive, onToggle }) {
  return (
    <div className="accordion-item">
      <h3>{title}</h3>
      <button className="accordion-btn" onClick={onToggle}>
        {isActive ? 'Hide' : 'Show'}
      </button>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
}

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const items = [
    {
      title: 'About',
      content:
        'With a population of about 2 million, Almaty is Kazakhstan’s largest city. From 1929 to 1997, it was its capital city.',
    },
    {
      title: 'Etymology',
      content:
        'The name comes from the Kazakh word for “apple”, and the region surrounding Almaty is thought to be the ancestral home of the apple.',
    },
  ];

  return (
    <div className="component-container">
      <h2>Almaty, Kazakhstan</h2>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isActive={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}
