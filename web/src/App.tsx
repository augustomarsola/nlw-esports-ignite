import "./styles/main.css";
import logoImg from "./assets/logo-nlw-esports.svg";

function App() {
  return (
    <div className="max-w-[1334px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9572FC] via-[#43E7AD] to-[#E1D55D]">
          duo
        </span>{" "}
        está aqui.
      </h1>
    </div>
  );
}

export default App;
