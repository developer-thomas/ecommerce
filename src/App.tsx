import { useState } from "react";
import Navbar from "./components/Navbar";

// No tipo do state hook pai, define o tipo dos valores que serão armazenados
function App() {
  const [mode, setMode] = useState<string>("light");

  return (
    <div className={mode === "light" ? "container" : "dark container"}>
      <Navbar mode={mode} setMode={setMode}></Navbar>
    </div>
  );
}

export default App;
