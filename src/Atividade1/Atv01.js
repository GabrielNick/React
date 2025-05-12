import Relogio from "./Relogio";
import Letreiro from "./Letreiro";
import './Atv01.css';
import { Link } from "react-router-dom";

export default function Atv01() {
    return (
        <div class="atv01-container">
            <h1 class="atv01-title">Atividade 1 - Relógio e Letreiro</h1>
            <Relogio />
            <Letreiro />
            <Link class="atv01-link" to="/">Voltar</Link>
        </div>

    );
}

