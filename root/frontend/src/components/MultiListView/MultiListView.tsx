import "./MultiListView.css";
import { TileItem } from "../TileItem/TileItem";
import { Link } from "react-router-dom";
import { userDoc } from "../../../public/testDB";
export default function MultiListView(): JSX.Element {

    return (
        <article>
            <section className="mlv-header">
                <h2 className="mlv-title">Lists</h2>
            </section>
            <section className="mlv-lists-container">
                {userDoc.lists.map((e) => {
                    return (
                        <Link
                            className="mlv-link"
                            /* FIXME: to={`${e.listName}`} */ to={`${e.listName}`}
                            state={{ listDetails: e }}
                        >
                            <TileItem details={e} />
                        </Link>
                    );
                })}
            </section>
        </article>
    );
}
