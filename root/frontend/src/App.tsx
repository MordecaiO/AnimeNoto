import "./App.css";
import { TileItem } from "./components/TileItem/TileItem";
const data: {
  name: string;
  items: object[];
}[] = [{ name: "Want To Watch", items: [{ title: "Jujutsu Kaisen" }] }];

function App() {
  return (
    <div className="app-container">
      <TileItem isList={false} listDetails={data} />
    </div>
  );
}

export default App;
