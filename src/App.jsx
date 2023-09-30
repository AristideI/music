import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Artist from "./components/Artist";

function App() {
  let [current, setCurrent] = useState("beyonce");

  useEffect(
    function () {
      fetch("./components/data.json").then((data) => console.log(data));
    },
    [current]
  );
  return (
    <section className="w-full h-screen px-[7%] py-8">
      <section className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <img
            className="w-10 object-contain"
            src="/music-note.png"
            alt="logo"
          />
          <p className="font-serif font-bold text-black text-2xl">Musicx</p>
        </div>
        <div className="flex items-center gap-4">
          <select className="w-[35rem] px-4 py-2 font-serif font-bold rounded-xl">
            <option className="h-48" value="beyonce">
              beyonce
            </option>
            <option className="h-48" value="eminem">
              eminem
            </option>
            <option className="h-48" value="taylor">
              Taylor Swift
            </option>
            <option className="h-48" value="kendrick">
              Kendrick Lamar
            </option>
            <option className="h-48" value="ariana">
              Ariana Grande
            </option>
            <option className="h-48" value="drake">
              Drake
            </option>
            <option className="h-48" value="kanye">
              Kanye West
            </option>
            <option className="h-48" value="rihanna">
              Rihanna
            </option>
            <option className="h-48" value="bruno">
              Bruno Mars
            </option>
            <option className="h-48" value="weeknd">
              The weeknd
            </option>
          </select>
          <button className="shadow-inner shadow-blue-500 px-5 py-1 font-bold font-serif bg-blue-100 rounded-lg">
            Search
          </button>
        </div>
      </section>
      <Artist />
    </section>
  );
}

export default App;
