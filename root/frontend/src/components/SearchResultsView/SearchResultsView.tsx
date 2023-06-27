import "./SearchResultsView.css";
import { TileItem } from "../TileItem/TileItem";
import { SearchResult,AnimeList, Both } from "../../vite-env";
export default function SearchResultsView() {
    const data: Both[] = [
        {
            name: "Jujutsu Kaisen",
            src: "Jikan path",
            status: "airing",
            genres: ["supernatural", "horror"],
        },
        {
            name: "86",
            src: "Jikan path",
            status: "aired",
            genres: ["action", "adventure"],
        },
    ];
    const listOfLists: AnimeList[] = [
        {
            name: "Watching",
            src: "some string",
            numberOfItems: 5, // list.length
        },
        {
            name: "Watched",
            src : "some string",
            numberOfItems: 9,
        },
    ];
    return (
        <article>
            <section className="srv-header">
                <button className="srv-lists-button">Lists</button>
                <input
                    className="srv-searchbar"
                    placeholder="Search catalogue"
                />
                <button className="srv-sort">Sort</button>
                <button className="srv-filter">Filter</button>
            </section>
            <section className="srv-results-container">
                {data.map((e) => {
                    console.log("e ----->", e)
                    console.log(typeof e)
                    return <TileItem /* isList={false} */ details={e} />;
                })}
            </section>
        </article>
    );
}
