import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Atv01 from "./Atividade1/Atv01";
import Atv02 from "./Atividade2/Atv02";
import Atv03 from "./Atividade3/Atv03";


export default function minhasRotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Atividade1/atv01" element={<Atv01/>} />
                <Route path="/Atividade2/atv02" element={<Atv02/>} />
                <Route path="/Atividade3/atv03" element={<Atv03/>} />

            </Routes>
        </BrowserRouter>
    );
}