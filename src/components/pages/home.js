import React, { useRef } from "react";
import "../../App.css";
import logo from "../../logo.svg";

const Home = () => {
  const scrollToImbianchino = () => {
    const imbianchinoElement = document.getElementById("imbianchino");
    imbianchinoElement.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToElettricista = () => {
    const elettricistaElement = document.getElementById("elettricista");
    elettricistaElement.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToTransporti = () => {
    const transportiElement = document.getElementById("transporti");
    transportiElement.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    const contactElement = document.getElementById("contact");
    contactElement.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="homeComponent">
      <div className="navbar">
        <ul>
          <li>
            <a href="#">Casa</a>
          </li>
          <li>
            <a href="#">Chi sono</a>
          </li>
          <li>
            <a href="#" onClick={scrollToContact}>
              Contatto
            </a>
          </li>
        </ul>
      </div>
      <div className="content">
        <h1>Imbianchino Elettricista Trasporti</h1>
        <p>
          Che tu abbia bisogno di assistenza elettrica, decorazioni d'interni,
          piccoli interventi di muratura, sgombero, trasporti o piccoli
          traslochi, posso aiutarti a realizzare i tuoi progetti. Con un impegno
          totale verso la qualità e l'attenzione ai dettagli, ti garantisco che
          otterrai i risultati desiderati.
        </p>
        <div className="works">
          <h2>Guarda alcuni dei miei lavori</h2>
          <div>
            <button onClick={scrollToImbianchino}>Imbianchino</button>
            <button onClick={scrollToElettricista}>Elettricista</button>
            <button onClick={scrollToTransporti}>Trasporti</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
