import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import "../../App.css";
const images = [
  {
    original: require("../../images/elec/image1.jpg"),
    thumbnail: require("../../images/elec/image1.jpg"),
  },
  {
    original: require("../../images/elec/image2.jpg"),
    thumbnail: require("../../images/elec/image2.jpg"),
  },
  // Adăugați aici mai multe imagini
];
const Elettricista = () => {
  return (
    <div className="elettricistaComponent" id="elettricista">
      <div className="ElettricistaContent">
        <h1 className="ElettricistaTitle">
          Installazioni Elettriche: Illumina il Tuo Ambiente!
        </h1>
        <p>
          Servizi elettrici professionali, garantendo l'installazione, la
          riparazione e la manutenzione dei sistemi elettrici. Garantisco la
          sicurezza e il corretto funzionamento delle tue installazioni.
        </p>
        <div className="works">
          <h2>Galerie</h2>
          <ImageGallery items={images} />
        </div>
      </div>
    </div>
  );
};

export default Elettricista;
