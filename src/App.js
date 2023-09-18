import logo from "./logo.svg";
import "./App.css";
import Home from "./components/pages/home";
import Imbianchino from "./components/pages/Imbianchino";
import Elettricista from "./components/pages/Elettricista";
import Trasporti from "./components/pages/Trasporti";
import Contact from "./components/pages/contact";
import ScrollButton from "./components/ScrollButton";

function App() {
  const containerStyle = {
    margin: 0,
    padding: 0,
  };

  return (
    <div style={containerStyle}>
      <Home />
      <Imbianchino />
      <Elettricista />
      <Trasporti />
      <Contact />
      <ScrollButton />
    </div>
  );
}

export default App;
