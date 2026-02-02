import { Modal } from "react-bootstrap";

function AddServiceModal({
  show,
  onHide,
  title,
  description,
  setTitle,
  setDescription,
  handleSubmit,
}) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add Service</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Service Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <textarea
            className="form-control mb-3"
            placeholder="Service Description"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <div className="d-flex justify-content-end gap-2">
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={onHide}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-dark">
              Add Service
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default AddServiceModal;
