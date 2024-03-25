export default function Login() {
  return (
    <div className="container">
      <form action="/check" method="POST">
        <div className="form-group">
          <label>Username</label>
          <input
            type="email"
            name="femail"
            className="form-control"
            id="femail"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We &apos ll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="fpassword"
            className="form-control"
            id="fpassword"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3 mb-3">
          Login
        </button>
      </form>
    </div>
  );
}
