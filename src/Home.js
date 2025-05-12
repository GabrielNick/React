import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
    return (
        <div className="home-container">
            <h1 className="home-title">Sistema de Atividades</h1>
            <p className="home-subtitle">Escolha uma das opções abaixo:</p>
            <div className="home-menu">
                <Link className="home-button" to="/Atividade1/atv01">Atividade 01</Link>
                <Link className="home-button" to="/Atividade2/atv02">Atividade 02</Link>
                <Link className="home-button" to="/Atividade3/atv03">Atividade 03</Link>
                <Link className="home-button" to="/atv04">Atividade 04</Link>
            </div>
        </div>
    );
};

export default Home;