import "./DetailedListView.css";
import ListItem from "../ListItem/ListItem";
import { ListItemType } from "../../vite-env";
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
    const location = useLocation()
    console.log("pppppppppppp",location.state)
    return (
        <div className="dlv-container">
            <header className="dlv-header">
                <div className="img-container">
                    <img className="header_image"></img>
                </div>
                <section className="header-items">
                    <p className="list-type">Default List</p>
                    <div className="details-container">
                        <h1 className="list-name">
                            A longer name anime to test how the List name reacts{" "}
                        </h1>
                        <p className="list-desc">
                            List description. This could be a long description,
                            but it could also be short.
                        </p>
                    </div>
                    <p className="updated-text">Last updated 8/7/23 15:00</p>
                </section>
            </header>
            <main className="list-items-container">
                {location.state.x.map((listitem) => {
                    return <ListItem details={listitem} />;
                })}
            </main>
        </div>
    );
}

export default DetailedListView;
