import './Atv05.css';
import { Link } from "react-router-dom";
import FormQuiz from './components/FormQuiz';
import FormTicket from './components/FormTicket';
import Accordion from './components/Accordion';
import ContactSection from './components/ContactSection';

export default function Atv05() {
  return (
    <div className="page">
      <h1>Atividades - Aula 12 (Gestão de Estado)</h1>
      <FormQuiz />
      <FormTicket />
      <Accordion />
      <ContactSection />
      <Link to="/">Voltar</Link>
    </div>
  );
}