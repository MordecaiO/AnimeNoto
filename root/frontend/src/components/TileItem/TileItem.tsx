import "./TileItem.css";

import { Both2 } from "../../vite-env";
export const TileItem = ({ details }: { details: Both2 }): JSX.Element => {
    return (
        <div className="menu-container">
            <article className="tile-container">
                <div className="tile-preview">
                    <img src={`/test.image.jpg`} alt="preview" />
                    {details.genres && (
                        <div className="tile-genres-container">
                            {details.genres.map((g) => {
                                return <span className="tile-genre">{g}</span>;
                            })}
                        </div>
                    )}
                </div>
                <div className="tile-details">
                    <span className="tile-title">
                        {details.name ? details.name : details.listName}
                    </span>
                    <span className="tile-status">
                        {details.status
                            ? `${details.status}`
                            : `${details.numberOfItems} items`}
                    </span>
                </div>
            </article>
            <button className="context-button">...</button>
        </div>
    );
};
