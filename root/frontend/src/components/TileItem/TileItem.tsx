export const TileItem = ({
  isList,
  listDetails,
}: {
  isList: boolean;
  listDetails: { name: string; itemCount: number };
}) => {
  return (
    <article className="tile-container">
      <section className="tile-content-main">
        <img className="tile-preview" src="" alt="preview" />
        <h2 className="tile-title"></h2>
        <h4 className="tile-status"></h4>
      </section>
      <div className="tile-content-minor"></div>
      {isList ? (
        <section>
          <h2>{listDetails.name}</h2>
          <h4>{listDetails.itemCount}</h4>
        </section>
      ) : (
        <span>
          <div></div>
          <div></div>
          <div></div>
        </span>
      )}
    </article>
  );
};
