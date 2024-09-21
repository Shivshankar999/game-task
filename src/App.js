import Game from "./components/Game";
import GameImg from "./components/GameImg";
import Header from "./components/Header";

function App() {
  return (
    <div className="m-auto  w-[700px] h-[550px] mt-20 border border-black bg-green-100">
      <div className="w-full h-24 bg-green-400">
        <Header />
      </div>
      <div className="flex justify-between mr-8 h-[454px]  w-[700px]">
        <GameImg />
        <Game />
      </div>
    </div>
  );
}

export default App;
