import { useState } from "react";
import { OpenBurger } from "./components/OpenBurger";
import { MainProduct } from "./components/MainProduct";
import { OpenSlider } from "./components/OpenSlider";
import { Header } from "./components/Header";

function App() {
  const [openSlider, setOpenSlider] = useState(false);
  const [openBurger, setOpenBurger] = useState(false);

  return (
    <div className="max-w-[1440px] mobile:max-w-[375px] w-full h-[900px] mobile:overflow-hidden">
      <Header setOpenBurger={setOpenBurger} />
      <MainProduct setOpenSlider={setOpenSlider} />
      {openSlider && <OpenSlider setOpenSlider={setOpenSlider} />}
      {openBurger && <OpenBurger setOpenBurger={setOpenBurger} />}
    </div>
  );
}

export default App;
