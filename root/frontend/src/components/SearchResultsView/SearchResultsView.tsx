import "./SearchResultsView.css";
export default function SearchResultsView() {
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
            <section></section>
        </article>
    );
}
