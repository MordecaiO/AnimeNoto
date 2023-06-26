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
    <div className="menu-container">
      <article className="tile-container">
        <div className="tile-preview">
          <img src={testImage} alt="preview" />
        </div>

        <div className="tile-details">
          <span className="tile-title">Jujitsu Kaisen</span>
          <span className="tile-status">Ongoing</span>
        </div>

        <div className="tile-content-minor">
          {isList ? (
            <section>
              <h2>{listDetails[0].name}</h2>
              <h4>{listDetails[0].items.length}</h4>
            </section>
          ) : (
            <div className="tile-genres-container">
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
        </div>
      </article>
      <button className="context-button">...</button>
    </div>
  );
};
