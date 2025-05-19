import Gallery from "./components/Gallery";
import { Link } from "react-router-dom";
import "./Atv04.css";

const Atv04 = () => {
    return (
        <div className="atv04-container">
            <h1 className="atv04-title">Atividade 4 - Lista de Perfis com map()</h1>
            <Gallery />
            <Link className="atv04-link" to="/">Voltar</Link>
        </div>
    );
};

export default Atv04;
