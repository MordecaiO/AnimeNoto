export default function CreateListModal(): JSX.Element {
  return (
    <div className="background">
      <div className="modal-container">
        <div className="modal">
          <h4 className="modal-header"></h4>
          <form className="modal-form">
            <input className="modal-input"></input>
            <button className="cancel-btn" />
            <button className="save-btn" />
          </form>
        </div>
      </div>
    </div>
  );
}
