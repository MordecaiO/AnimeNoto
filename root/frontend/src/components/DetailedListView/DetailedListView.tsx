import "./DetailedListView.css";
import ListItem from "../ListItem/ListItem";
import { ListType, ListItemType } from "../../vite-env";
import { useLocation } from "react-router-dom";
const exampleList: ListItemType[] = [
    {
        name: "Naruto",
        status: "airing",
        description: "The nine-tailed fox",
        src: "",
        genres: ["action", "shonen", "ninja"],
        index: 0,
    },
    {
        name: "Naruto",
        status: "airing",
        description: "The nine-tailed fox",
        src: "",
        genres: ["action", "shonen", "ninja"],
        index: 1,
    },
    {
        name: "Naruto",
        status: "airing",
        description: "The nine-tailed fox",
        src: "",
        genres: ["action", "shonen", "ninja"],
        index: 2,
    },
    {
        name: "Naruto",
        status: "airing",
        description: "The nine-tailed fox",
        src: "",
        genres: ["action", "shonen", "ninja"],
        index: 3,
    },
];
function DetailedListView(): JSX.Element {
    const {
        // FIXME: listName: name,
        listName,
        dft,
        lastUpdated,
        listDescription,
        listItems,
    }: ListType = useLocation().state.listDetails;
    const d = new Date(lastUpdated).toDateString()
    return (
        <div className="dlv-container">
            <header className="dlv-header">
                <div className="img-container">
                    <img className="header_image"></img>
                </div>
                <section className="header-items">
                    <p className="list-type">
                        {dft ? "Default List" : "User List"}
                    </p>
                    <div className="details-container">
                        <h1 className="list-name">{listName}</h1>
                        <p className="list-desc">{listDescription}</p>
                    </div>
                    <p className="updated-text">
                        {`Last updated: ${d}`}
                    </p>
                </section>
            </header>
            <main className="list-items-container">
                {listItems.map((listitem, i) => {
                    return <ListItem details={{ ...listitem, index: i }} />;
                })}
            </main>
        </div>
    );
}

export default DetailedListView;
