export default function CreatePost() {
  return (
    <div className="container">
      <form action="/createpost" method="POST">
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            name="title"
            className="form-control"
            id="femail"
            placeholder="Enter title"
          />
        </div>
        <div className="form-group">
          <label>Short Description</label>
          <input
            type="text"
            name="sDescription"
            className="form-control"
            id="sDescription"
            placeholder="short description for the post"
          />
        </div>

        <div className="form-group">
          <label>Text for post</label>
          <textarea
            className="form-control"
            id="epost"
            placeholder="enter the text for the post"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary mt-3 mb-3">
          Create post
        </button>
      </form>
    </div>
  );
}
