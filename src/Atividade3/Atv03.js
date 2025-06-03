import Gallery from "./Gallery";
import { Link } from "react-router-dom";
import "./Atv03.css";
import List from "../Atividade4/components/List";
import PackingList from "./PackingList";
import Recipe from "./Recipe";
import TeaSet from "./TeaSet";
import TeaGathering from "./TeaGathering";

const Atv03 = () => {
    return (
        <div className="atv03-container">
            <h1 className="atv03-title">Atividade 3 - Componentes Reutilizáveis</h1>
            <Gallery />
            <List />
            <PackingList />
            <h2>Recipe</h2>
            <section>
                <h3>Chai Recipe</h3>
                <h4>Três</h4>
                <Recipe drinkers={3} />
                <h4>Gathering</h4>
                <Recipe drinkers={4} />
            </section>
            <TeaSet />
            <TeaGathering />
            <Link className="atv03-link" to="/">Voltar</Link>
        </div>
    );
};

export default Atv03;