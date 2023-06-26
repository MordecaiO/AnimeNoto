import "./SearchResultsView.css";
import { TileItem } from "../TileItem/TileItem";
import { SearchResult } from "../../vite-env";
export default function SearchResultsView() {
    const data: SearchResult[] = [
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
    // const listOfLists = [
    //     {
    //         name: "Watching",
    //         src: "some string",
    //         numberOfItems: 5, // list.length
    //     },
    // ];
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
                    return <TileItem isList={false} details={e} />;
                })}
            </section>
        </article>
    );
}
