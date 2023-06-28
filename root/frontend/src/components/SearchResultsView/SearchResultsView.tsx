import "./SearchResultsView.css";
import { TileItem } from "../TileItem/TileItem";
import { Both } from "../../vite-env";
export default function SearchResultsView() {
    const exampleSearchResults: Both[] = [
        {
            name: "Jujutsu Kaisen",
            src: "Jikan path",
            status: "airing",
            genres: ["horror", "supernatural"],
        },
        {
            name: "86",
            src: "Jikan path",
            status: "aired",
            genres: ["action", "adventure"],
        },
        {
            name: "Planetes",
            src: "Jikan path",
            status: "aired",
            genres: ["action", "romance", "slice of life"],
        },
        {
            name: "The Familiar of Zero",
            src: "Jikan path",
            status: "aired",
            genres: ["adventure", "romance"],
        },
        {
            name: "That Time I Got Reincarnated as a Slime",
            src: "Jikan path",
            status: "aired",
            genres: ["action", "adventure", "comedy", "fantasy"],
        },
    ];
    // const exampleLists: Both[] = [
    //     {
    //         name: "Watching",
    //         src: "some string",
    //         numberOfItems: 5, // list.length
    //     },
    //     {
    //         name: "Watched",
    //         src: "some string",
    //         numberOfItems: 9,
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
                {exampleSearchResults.map((e) => {
                    console.log("e ----->", e);
                    console.log(typeof e);
                    return <TileItem details={e} />;
                })}
                {/*         {exampleLists.map((e) => {
                    console.log("e ----->", e);
                    console.log(typeof e);
                    return <TileItem details={e} />;
                })} */}
            </section>
        </article>
    );
}
