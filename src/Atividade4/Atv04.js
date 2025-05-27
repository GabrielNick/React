import './Atv04.css';
import { Link } from "react-router-dom";
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
      <section>
        <ShapeEditor />
      </section>

      <section title="Eventos e Props">
        <Toolbar
          onPlayMovie={() => alert('Playing!')}
          onUploadImage={() => alert('Uploading!')}
        />
      </section>

      <section title="Estados e Interações">
        <Gallery />
        <Form />
      </section>

      <section title="Manipulação de Objetos e Estado">
        <MovingDot />
        <Form2 />
        <Form3 />
      </section>

      <section title="Listas e Mutações">
        <Counter />
        <List />
        <List2 />
        <CounterList />
      </section>

      <section title="Listas com Atualização de Estado">
        <List3 />
        <List4 />
        <BucketList />
      </section>
      <Link className="atv03-link" to="/">Voltar</Link>
    </div>
  );
}


