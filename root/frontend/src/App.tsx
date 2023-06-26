import "./App.css";
import { TileItem } from "./components/TileItem/TileItem";
import SearchResultsView from "./components/SearchResultsView/SearchResultsView.tsx";
function App() {
    const data: {
        name: string;
        items: object[];
    }[] = [{ name: "Want To Watch", items: [{ title: "Jujutsu Kaisen" }] }];
    return (
        <div>
            <p>Robert</p>
            <SearchResultsView />
            <TileItem isList={false} listDetails={data} />
        </div>
    );
}

export default App;
