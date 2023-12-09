import { useState } from "react";
import "./App.css";
import SlotBox from "./apps/SlotBox";
import Header from "./apps/Header";

function App() {
  return (
    <div>
      <Header />
      <SlotBox values={["d", "e", "d"]} />
    </div>
  );
}

export default App;
