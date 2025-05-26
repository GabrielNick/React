import './Atv04.css';
import Toolbar from './components/Toolbar';
import Gallery from './components/Gallery';
import Counter from './components/Counter';
import Form from './components/Form';
import MovingDot from './components/MovingDot';
import Form2 from './components/Form2';
import Form3 from './components/Form3';
import List from './components/List';
import List2 from './components/List2';
import ShapeEditor from './components/ShapeEditor';
import CounterList from './components/CounterList';
import List3 from './components/List3';
import List4 from './components/List4';
import BucketList from './components/BucketList';

export default function Atv04() {
  return (
    <div className="page">
      <h1 className="main-title">Atividade Aula 11 - Componentes React</h1>
      <Section>
        <ShapeEditor />
      </Section>

      <Section title="Eventos e Props">
        <Toolbar
          onPlayMovie={() => alert('Playing!')}
          onUploadImage={() => alert('Uploading!')}
        />
      </Section>

      <Section title="Estados e Interações">
        <Gallery />
        <Form />
      </Section>

      <Section title="Manipulação de Objetos e Estado">
        <MovingDot />
        <Form2 />
        <Form3 />
      </Section>

      <Section title="Listas e Mutações">
        <Counter />
        <List />
        <List2 />
        <CounterList />
      </Section>

      <Section title="Listas com Atualização de Estado">
        <List3 />
        <List4 />
        <BucketList />
      </Section>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section className="section">
      <h2 className="section-title">{title}</h2>
      <div className="component-box">
        {children}
      </div>
    </section>
  );
}
