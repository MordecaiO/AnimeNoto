import { CreateListModalProps } from "../../vite-env";

export default function CreateListModal({
  setOpen,
  isOpen,
  lists,
  handleCreateList,
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
                placeholder="Add List Name"
                required={true}
              ></input>
            </div>
            <div className="description-group">
              <label className="description-label">Description</label>
              <textarea
                className="description-input"
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
