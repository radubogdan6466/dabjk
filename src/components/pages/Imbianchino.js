import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import "../../App.css";

const images = [
  {
    original: require("../../images/paint/image1.jpg"),
    thumbnail: require("../../images/paint/image1.jpg"),
  },
  {
    original: require("../../images/paint/image2.jpg"),
    thumbnail: require("../../images/paint/image2.jpg"),
  },
  {
    original: require("../../images/paint/image3.jpg"),
    thumbnail: require("../../images/paint/image3.jpg"),
  },
  {
    original: require("../../images/paint/image4.jpg"),
    thumbnail: require("../../images/paint/image4.jpg"),
  },
  {
    original: require("../../images/paint/image5.jpg"),
    thumbnail: require("../../images/paint/image5.jpg"),
  },
  {
    original: require("../../images/paint/image6.jpg"),
    thumbnail: require("../../images/paint/image6.jpg"),
  },
  {
    original: require("../../images/paint/image7.jpg"),
    thumbnail: require("../../images/paint/image7.jpg"),
  },
  {
    original: require("../../images/paint/image8.jpg"),
    thumbnail: require("../../images/paint/image8.jpg"),
  },
];
const Imbianchino = () => {
  return (
    <div className="ImbianchinoComponent" id="imbianchino">
      <div className="ImbianchinoContent">
        <h1 className="ImbianchinoTitle">
          Servizi di Decorazione e Piccole Opere di Muratura: Trasforma il tuo
          Spazio!
        </h1>
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

export default Imbianchino;
