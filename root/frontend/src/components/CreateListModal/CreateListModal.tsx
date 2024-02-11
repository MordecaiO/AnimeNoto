import { CreateListModalProps } from "../../vite-env";

export default function CreateListModal({
  setOpen,
  isOpen,
}: CreateListModalProps): JSX.Element {
  return (
    <aside className="background">
      <div className="modal-container">
        <section className="modal">
          <button className="close-btn" onClick={() => setOpen(!isOpen)}>
            X
          </button>
          <h4 className="modal-header">New List</h4>
          <form className="modal-form">
            <div className="name-group">
              <label className="name-label">Name</label>
              <input
                className="name-input"
                placeholder="Add name"
                required={true}
              ></input>
            </div>
            <div className="desc-group">
              <label className="desc-label">Description</label>
              <textarea
                className="desc-input"
                placeholder="Add an optional description..."
              ></textarea>
            </div>

            <div className="btn-container">
              <button className="save-btn">Save</button>
            </div>
          </form>
        </section>
      </div>
    </aside>
  );
}
