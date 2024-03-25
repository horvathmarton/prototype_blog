export default function CreatePost() {
  return (
    <div className="flex flex-col items-start my-4 gap-2 w-100">
      <label>Title</label>
      <input
        type="text"
        name="title"
        id="femail"
        placeholder="Enter title"
        className="border-2 rounded-md p-2 self-stretch"
      />
      <label>Short Description</label>
      <input
        type="text"
        name="sDescription"
        id="sDescription"
        placeholder="short description for the post"
        className="border-2 rounded-md p-2 self-stretch"
      />

      <label>Text for post</label>
      <textarea
        id="epost"
        placeholder="enter the text for the post"
        className="border-2 rounded-md p-2 self-stretch"
        rows={10}
      ></textarea>
      <button className="bg-blue-600 px-3 py-2 text-white rounded-md">
        Create post
      </button>
    </div>
  );
}
