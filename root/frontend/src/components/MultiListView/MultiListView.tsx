import "./MultiListView.css";
import { Both } from "../../vite-env";
import { TileItem } from "../TileItem/TileItem";
import { Link, Route, Routes } from "react-router-dom";
import { userDoc } from "../../../public/testDB";
import DetailedListView from "../DetailedListView/DetailedListView";
export default function MultiListView(): JSX.Element {
    const exampleLists: Both[] = [
        {
            name: "Watching",
            src: "some string",
            numberOfItems: 5, // list.length
        },
        {
            name: "Watched",
            src: "some string",
            numberOfItems: 9,
        },
    ];

    return (
        <article>
            <section className="mlv-header">
                <h2 className="mlv-title">Lists</h2>
            </section>
            <section className="mlv-lists-container">
                {userDoc.lists.map((e) => {
                    return (
                        <Link to={`${e.name}`} state={{ listDetails: e }}>
                            <TileItem details={e} />
                        </Link>
                    );
                })}
            </section>
        </article>
    );
}
