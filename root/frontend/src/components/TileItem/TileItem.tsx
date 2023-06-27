import "./TileItem.css";

import { Both } from "../../vite-env";
export const TileItem = ({ details }: { details: Both }): JSX.Element => {
    // const {name,src,...rest} = details
    return (
        <div className="menu-container">
            <article className="tile-container">
                {/* <section className="tile-content-main"> */}
                <div className="tile-preview">
                    <img src={`/test.image.jpg`} alt="preview" />
                </div>
                <div className="tile-details">
                    <span className="tile-title">{details.name}</span>
                    <span className="tile-status">{details.status}</span>
                </div>
                {/* </section> */}
                <div className="tile-content-minor">
                    {!details.genres ? (
                        <section>
                            <h2>{details.name}</h2>
                            <h4>{details.numberOfItems}</h4>
                        </section>
                    ) : (
                        <div className="tile-genres-container">
                            {details.genres.map((g) => {
                                return <span>{g}</span>;
                            })}
                        </div>
                    )}
                </div>
            </article>
            <button className="context-button">...</button>
        </div>
    );
};
