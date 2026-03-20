import "./App.css";
// import { Button } from "./components/Button";
import { Footer } from "./components/Footer";
// import { Image } from "./components/Image";
// import ragnarImg from "./assets/Screenshot 2022-10-21 at 15.10.01 (2).png";
import { Navbar } from "./components/Navbar";
import { useState } from "react";
import { type petType } from "./types";
import { AddPizzaForm } from "./components/AddPizzaForm";
function App() {
  const [petState, setPetState] = useState<petType>({
    name: "Ragnar",
    age: 5,
    size: "large",
  });

  return (
    <>
      <Navbar petState={petState} setter={setPetState} />
      <main>
        <h1>Typescript is fun</h1>
        <AddPizzaForm />

        {/* <Button>
          <img alt="test" src={ragnarImg} />
        </Button> */}
      </main>
      <Footer />
    </>
  );
}

export default App;
