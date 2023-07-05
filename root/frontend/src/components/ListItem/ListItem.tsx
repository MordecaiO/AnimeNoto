import "./ListItem.css";
import { ListItemType } from "../../vite-env";
export default function ListItem({
    details,
}: {
    details: ListItemType;
}): JSX.Element {
    const { name, src, status, description, genres, index } = details;
    return (
        <article className="item-container">
            <div className="xleft inner-item-wrapper">
                <p className="item-index">{`# ${index}`}</p>
                <img src={src} className="item-image"></img>
            </div>
            <div className="xcenter inner-item-wrapper">
                <span className="item-name">{name}</span>
                <span className="item-status">{status}</span>
                <span className="item-description">{description}</span>
                <div className="item-genres">
                    {genres.map((g) => {
                        return <span className="item-genre">{g}</span>;
                    })}
                </div>
            </div>
            <div className="xright inner-item-wrapper">
                <button className="item-delete">X</button>
                <button className="item-move">Move to ...</button>
            </div>
        </article>
    );
}
