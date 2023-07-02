import "./ListItem.css";
import { ListItemType } from "../../vite-env";
export default function ListItem({
    details,
}: {
    details: ListItemType;
}): JSX.Element {
    const { name, status, description, genres, index } = details;
    return (
        <article className="item-container">
            <div className="xleft inner-item-wrapper">
                <p>{index}</p>
                <img></img>
            </div>
            <div className="xcenter inner-item-wrapper">
                <span>{name}</span>
                <span>{status}</span>
                <span className="item-description">{description}</span>
                <div>
                    {genres.map((g) => {
                        return <span>{g}</span>;
                    })}
                </div>
            </div>
            <div className="xright inner-item-wrapper">
                <button>X</button>
                <button>Move to ...</button>
            </div>
        </article>
    );
}
