import { useState } from "react";
import "./App.css";

function App() {
  let pro = fetch(
    "https://musicbrainz.org/ws/2/artist?query=artist:rihanna&fmt=json"
  );

  pro.then((data) => data.json()).then((data) => console.log(data));
  return <p>This is the best</p>;
}

export default App;
