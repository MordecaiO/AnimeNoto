import "./TileItem.css";

import { Both } from "../../vite-env";
export const TileItem = ({ details }: { details: Both }): JSX.Element => {
    const {name,/* src, */status, genres, numberOfItems,} = details
    return (
        <div className="menu-container">
            <article className="tile-container">
                <div className="tile-preview">
                    <img src={`/test.image.jpg`} alt="preview" />
                    {genres && (
                        <div className="tile-genres-container">
                            {genres.map((g) => {
                                return <span className="tile-genre">{g}</span>;
                            })}
                        </div>
                    )}
                </div>
                <div className="tile-details">
                    <span className="tile-title">{name}</span>
                    <span className="tile-status">
                        {status
                            ? `${status}`
                            : `${numberOfItems} items`}
                    </span>
                </div>
            </article>
            <button className="context-button">...</button>
        </div>
    );
};
