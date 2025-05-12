import Gallery from "./Gallery";
import { Link } from "react-router-dom";
import "./Atv03.css";

const Atv03 = () => {
    return (
        <div className="atv03-container">
            <h1 className="atv03-title">Atividade 3 - Componentes Reutilizáveis</h1>
            <Gallery />
            <Link className="atv03-link" to="/">Voltar</Link>
        </div>
    );
};

export default Atv03;
