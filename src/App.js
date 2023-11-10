import { useEffect, useState } from "react";
import Diena from "./Diena";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const pirmdienasStundas = [
    "Sports pie Klintas",
    "Dabaszinības mīlu fiziku",
    "Vēsture",
    "🫥",
  ];
  const otrdienasStundas = ["Cita stunda", "Vēl stunda"];

  const visasStundas = [
    {
      diena: "Pirmdiena",
      stundas: [
        "Sports pie Klintas",
        "Dabaszinības mīlu fiziku",
        "Vēsture",
        "🫥",
      ],
    },
    {
      diena: "Otrdiena",
      stundas: [
        "Sistēmu programmēšana",
        "Sistēmu programmēšana",
        "Sistēmu programmēšana",
        "Sistēmu programmēšana",
      ],
    },
    {
      diena: "Trešdiena",
      stundas: [
        "Sistēmu programmēšana",
        "Sistēmu programmēšana",
        "Sistēmu programmēšana",
        "Sistēmu programmēšana",
      ],
    },
    {
      diena: "Ceturtdiena",
      stundas: [
        "IM done Edmunds",
        "let me go",
        "when will the friday come",
        "🫥",
      ],
    },
    {
      diena: "Piektdiena",
      stundas: [
        "Atdot Railijam datoru stunda",
        "Nu gan viss?",
        "AAudzināšana",
        "🫥",
      ],
    },
  ];

  // Kā visasStundas pārtais'oit par masīvu?
  useEffect(() => {
    async function getLessons(){
      const response = await fetch("https://cheese-cake.onthewifi.com/api/lessons");
      const data = await response.json();
      console.log(data.IPb22);
      const clensedData = [
        {
        diena: "Pirmdiena",
        stundas: data.IPb22[0].classes
        },
        {
          diena: "Otradiena",
          stundas: data.IPb22[1].classes
          },
          {
            diena: "Tresdiena",
            stundas: data.IPb22[2].classes
            },
            {
              diena: "Ceturndiena",
              stundas: data.IPb22[3].classes
              },
              {
                diena: "Piekdiena",
                stundas: data.IPb22[4].classes
                }
      ]
      
    setData(clensedData);
    
    setLoading(false);
    }
    getLessons();
  }, []);

  const dienasJSX = data.map((dataa, i) => {
    return <Diena key={i} diena={dataa.diena} stundas={dataa.stundas} />;
  });
  return (
    <>
      {loading ? <p>Loading...</p> : dienasJSX}
    </>
  );
}

export default App;

// Uztaisi divas jaunas komponentets:
// - Diena.js
// - Stunda.js

// JS - .forEach() ir masīvu metode,
// kura apskata ikkatru masīva elementu,
// bet neko neatgriež (nav return)

// JS - .map() ir masīvu metode,
// kura apskata ikkatru masīva elementu
// un atgriež jaunu masīvu (return Array)

//
