import Diena from "./Diena";

function App() {
  const pirmdienasStundas = [
    "Sports pie Klintas",
    "Dabaszinības mīlu fiziku",
    "Vēsture",
    "🫥"
  ];
  const otrdienasStundas = [
    "Cita stunda",
    "Vēl stunda",
    "Iedod bucu comam",
    "Kissing the homies"
  ];
  return (
    <>
      <div>te būs stundu saraksts šodien</div>
      <Diena diena="Pirmdiena" stundas={pirmdienasStundas}/>
      <Diena diena="Otrdiena" stundas={otrdienasStundas}/>
    </>
  )
}

export default App;

// Uztaisi divas jaunas komponentets:
// - Diena.js
// - Stunda.js