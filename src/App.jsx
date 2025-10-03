import "./App.css";
import GenreMoveList from "./components/GenreMoveList";
import Header from "./components/Header";
import ProductionHouse from "./components/ProductionHouse";
import Slider from "./components/Slider";

const App = () => {
  return (
    <div>
      <Header />
      <Slider />
      <ProductionHouse />
      <GenreMoveList />
    </div>
  );
};

export default App;
