import { useState } from "react";
import Data from "./Data/Data";
import Navbar from "./Navbar/Navbar"

function App() {

  const [days, setDays] = useState(10);

  return (
    <div >
      <Navbar days={days} setDays={setDays} />
      <Data days={days} />
    </div>
  )
}

export default App;
