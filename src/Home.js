import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
    return (
        <div className="menu-container">
            <h1>Sistema de Atividades</h1>
            <p >Escolha uma das opções abaixo:</p>
            <div>
                <Link to="/Atividade1/atv01">Atividade 01</Link>
                <Link to="/Atividade2/atv02">Atividade 02</Link>
                <Link to="/Atividade3/atv03">Atividade 03</Link>
                <Link to="/Atividade4/atv04">Atividade 04</Link>
                <Link to="/Atividade5/atv05">Atividade 05</Link>
                <Link to="/Atividade6/atv06">Atividade 06</Link>
            </div>
        </div>
    );
};

export default Home;