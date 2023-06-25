import testImage from "./test.image.jpg";
import "./TileItem.css";
export const TileItem = ({
  isList,
  listDetails,
}: {
  isList: boolean;
  listDetails: { name: string; items: object[] }[];
}) => {
  return (
    <article className="tile-container">
      <section className="tile-content-main">
        <img className="tile-preview" src={testImage} alt="preview" />
        <div className="tile-details">
          <h2 className="tile-title">Anime_title</h2>
          <h4 className="tile-status">Ongoing</h4>
        </div>
      </section>
      <div className="tile-content-minor">
        {isList ? (
          <section>
            <h2>{listDetails[0].name}</h2>
            <h4>{listDetails[0].items.length}</h4>
          </section>
        ) : (
          <div className="tile-genres-container">
            <span>Supernatural</span>
            <span>Action</span>
            <span>Fantasy</span>
          </div>
        )}
      </div>
    </article>
  );
};
