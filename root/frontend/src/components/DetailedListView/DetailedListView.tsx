const DetailedListView = (): JSX.Element => {
  return (
    <div>
      <header className="dlv-header">
        <div className="img-container">
          <img></img>
        </div>
        <section className="header-items">
          <p className="list-type">Default List</p>
          <h1 className="list-name">List name</h1>
          <p className="list-desc">List description</p>
          <p className="updated-text">Last updated 8/7/23 15:00</p>
        </section>
      </header>
      <main className="list-items-container"></main>
    </div>
  );
};

export default DetailedListView;
