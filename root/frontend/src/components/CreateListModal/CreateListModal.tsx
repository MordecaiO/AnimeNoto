export default function CreateListModal(): JSX.Element {
  return (
    <aside className="background">
      <div className="modal-container">
        <section className="modal">
          <h4 className="modal-header">New List</h4>
          <form className="modal-form">
            <input className="name-input"></input>
            <input className="desc-input"></input>
            <div className="btn-container">
              <button className="cancel-btn" />
              <button className="save-btn" />
            </div>
          </form>
        </section>
      </div>
    </aside>
  );
}
