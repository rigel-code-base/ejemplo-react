import logo from "./logo.svg";
import "./App.css";
import CatView from "./components/molecules/catView";
import Button from "./components/atoms/button";
import { useEffect, useState } from "react";
import axios from "axios";

/*
  Props -> x
  Hooks -> useState
  Axios -> x
  Tailwind -> .
  Async -> .
*/

function App() {
  const [gato, setGato] = useState({});

  useEffect(() => {
    generarGato();
  }, []);

  const generarGato = async () => {
    try {
      const req = await axios.get("https://thatcopy.pw/catapi/rest/");
      const data = req.data;
      setGato({ imagen: data.webpurl, id: data.id });
    } catch {
      console.log("error");
    }
  };

  return (
    <div className="App">
      <CatView imagen={gato.imagen} id={gato.id} />
      <Button texto="Cambiar gato" cuandoClick={generarGato} />
    </div>
  );
}

export default App;
