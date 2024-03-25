export default function Login() {
  return (
    <div className="flex flex-col items-start my-4 gap-2 w-100">
      <label>Username</label>
      <input
        type="email"
        name="femail"
        id="femail"
        placeholder="Enter email"
        className="border-2 rounded-md p-2 self-stretch"
      />
      <small id="emailHelp">
        {"We'll never share your email with anyone else."}
      </small>
      <label>Password</label>
      <input
        type="password"
        name="fpassword"
        id="fpassword"
        placeholder="Password"
        className="border-2 rounded-md p-2 self-stretch"
      />
      <button className="bg-blue-600 px-3 py-2 text-white rounded-md">
        Login
      </button>
    </div>
  );
}
