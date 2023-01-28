export function Form(): JSX.Element {
  return (
    <div className="card card-body bg-secondary text-dark">
      <form>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          placeholder="Title"
          name="title"
          className="form-control mb-3 rounded-0 shadow-none border-0"
        />

        <label htmlFor="Description">Description</label>
        <textarea
          placeholder="Write Description"
          name="description"
          className="form-control mb-3 rounded-0 shadow-none border-0"
          rows={3}
        ></textarea>

        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
}
