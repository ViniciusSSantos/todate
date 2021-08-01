import React from "react";
import { Link } from "react-router-dom";
import '../styles/pages/landing.css';



function Landing() {
    return(
    <div id="page-landing">
      <div className="content-wrapper">


        <main>
          <h1>Nunca perca as datas dos seus eventos</h1>
          <p>Mantenha-se sempre organizado e preparado</p>
        </main>

     
        <Link to="/login" className="enter-app2">
            <span>Faça Login</span>
        </Link>
        <Link to="/signup" className="enter-app">
            <span>Cadastre-se</span>
        </Link>
      </div>
    </div>

    );
}

export default Landing;
