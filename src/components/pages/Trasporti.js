import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import "../../App.css";

const images = [
  {
    original: require("../../images/transport/image1.jpg"),
    thumbnail: require("../../images/transport/image1.jpg"),
  },
  {
    original: require("../../images/transport/image2.jpg"),
    thumbnail: require("../../images/transport/image2.jpg"),
  },
  {
    original: require("../../images/transport/image3.jpg"),
    thumbnail: require("../../images/transport/image3.jpg"),
  },
  {
    original: require("../../images/transport/image4.jpg"),
    thumbnail: require("../../images/transport/image4.jpg"),
  },
  {
    original: require("../../images/transport/image5.jpg"),
    thumbnail: require("../../images/transport/image5.jpg"),
  },
  {
    original: require("../../images/transport/image6.jpg"),
    thumbnail: require("../../images/transport/image6.jpg"),
  },
];
const Trasporti = () => {
  return (
    <div className="TransportiComponent" id="transporti">
      <div className="TransportiContent">
        <h1 className="TransportiTitle">Servizi di Transporti</h1>
        <p>
          Se vuoi dare nuova vita al tuo ambiente, sono qui per aiutarti. Offre
          servizi di decorazione e petites opere mauririe su masura. Dai alla
          tua casa una nuova prospettiva. Contattami per un'offerta
          personalizzata.
        </p>
        <div className="works">
          <h2>Galerie</h2>
          <ImageGallery items={images} />
        </div>
      </div>
    </div>
  );
};

export default Trasporti;
