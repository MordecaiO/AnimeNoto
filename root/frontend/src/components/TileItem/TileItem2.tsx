import "./TileItem.css";
import { Both } from "../../vite-env";
export const TileItem = ({ details }: { details: Both }): JSX.Element => {
    // const {name,src,...rest} = details
    return (
        <article className="tile-container">
            <section className="tile-content-main">
                <img
                    className="tile-preview"
                    src={`/test.image.jpg`}
                    alt="preview"
                />
                <div className="tile-details">
                    <h2 className="tile-title">{details.name}</h2>
                    <h4 className="tile-status">{details.status}</h4>
                </div>
            </section>
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
    );
};
