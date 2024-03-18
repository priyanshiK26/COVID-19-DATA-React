import { useState } from "react";
import Data from "./Data/Data";
import Navbar from "./Navbar/Navbar"

function App() {

  const [days, setDays] = useState(10);

  return (
    <div className=" relative ">
      <Navbar days={days} setDays={setDays} />
      <Data days={days} setDays={setDays} />
    </div>
  )
}

export default App;
