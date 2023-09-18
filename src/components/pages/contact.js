import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const Contact = () => {
  return (
    <div className="ContactComponent" id="contact">
      <div className="ContactContent">
        <h1 className="ContactTitle">CONTATTO</h1>
        <p>Torino è provincia Contattare direttamente su WhatsApp</p>
        <h2>3894707308</h2>
      </div>
      <FloatingWhatsApp
        phoneNumber="0039 3293091124"
        accountName="Darius"
        chatMessage="Salut, scrie-mii"
        avatar="link-catre-avatar"
      />
    </div>
  );
};

export default Contact;
