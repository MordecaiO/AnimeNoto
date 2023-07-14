import "./DetailedListView.css";

function DetailedListView(): JSX.Element {
  return (
    <div className="dlv-container">
      <header className="dlv-header">
        <div className="img-container">
          <img></img>
        </div>
        <section className="header-items">
          <p className="list-type">Default List</p>
          <div className="details-container">
            <h1 className="list-name">List name</h1>
            <p className="list-desc">
              List description. This could be a long description, but it could
              also be short.
            </p>
          </div>
          <p className="updated-text">Last updated 8/7/23 15:00</p>
        </section>
      </header>
      <main className="list-items-container">Hello</main>
    </div>
  );
}

export default DetailedListView;
