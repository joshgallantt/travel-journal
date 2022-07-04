import "./App.css";
import Card from "../Card/Card";
import Nav from "../Nav/Nav";
import data from "../../data";

function App() {
  const cardList = data.map((location) => {
    return <Card key={location.id} location={location} />;
  });

  return (
    <div>
      <Nav />
      <div className="flex-container">
      {cardList}
      </div>
    </div>
  );
}

export default App;
