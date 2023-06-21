import "./SearchResultsView.css";
export default function SearchResultsView() {
    return (
        <>
            <div className="srv-header">
                <button className="srv-lists-button">Lists</button>
                <input className="srv-searchbar" placeholder="Search anime" />
                <button className="srv-sort">Sort</button>
                <button className="srv-filter">Filter</button>
            </div>
        </>
    );
}
