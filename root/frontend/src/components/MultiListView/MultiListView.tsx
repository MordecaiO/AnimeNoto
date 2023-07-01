import "./MultiListView.css";
import { Both } from "../../vite-env";
import { TileItem } from "../TileItem/TileItem";
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
                <h2>Lists</h2>
            </section>
            <section className="mlv-lists-container">
                {exampleLists.map((e) => {
                    return <TileItem details={e} />;
                })}
            </section>
        </article>
    );
}
