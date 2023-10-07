import { AnimeListProps, AnimeProps } from "../../vite-env";

const isCollage = (itemsArr: AnimeProps[] | undefined): string => {
  if (!itemsArr) return "no items";

  return itemsArr.length > 3 ? "collage" : "non-collage";
};
export const AnimeList = ({
  name,
  items,
  lastUpdated,
  defList,
}: AnimeListProps): JSX.Element => {
  return (
    <div className="menu-container">
      <article className="tile-container">
        <div className="tile-preview">
          {isCollage(items) !== "no items" ? (
            isCollage(items) === "collage" ? (
              items?.slice(0, 4).map((item) => {
                return <img src={item.images.jpg.image_url} />;
              })
            ) : (
              <img src={items![0].images.jpg.image_url} />
            )
          ) : (
            <img src="../../public/animenoto_logo.png" />
          )}
          <img src={""} alt="preview" />
        </div>
        <div className="tile-details">
          <span className="tile-title">
            {name + defList ? "default list" : ""}
          </span>
          <span className="tile-status">{items?.length}</span>
          <span className="tile-update">{lastUpdated}</span>
        </div>{" "}
      </article>
      <button className="context-button">...</button>
    </div>
  );
};
