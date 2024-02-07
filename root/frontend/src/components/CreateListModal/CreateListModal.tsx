export default function CreateListModal(): JSX.Element {
  return (
    <aside className="background">
      <div className="modal-container">
        <section className="modal">
          <h4 className="modal-header">New List</h4>
          <form className="modal-form">
            <input
              className="name-input"
              placeholder="Add a name"
              required={true}
            ></input>
            <textarea
              className="desc-input"
              placeholder="Add an optional description..."
            ></textarea>
            <div className="btn-container">
              <button className="save-btn">Save</button>
            </div>
          </form>
        </section>
      </div>
    </aside>
  );
}
