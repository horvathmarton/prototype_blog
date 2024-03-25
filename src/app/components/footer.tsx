export function Footer() {
  return (
    <div className="container fixed-bottom">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            <svg className="bi" width="30" height="24">
              <use></use>
            </svg>
          </a>
          <span className="mb-3 mb-md-0 text-body-secondary">
            © 2023 Company, Inc
          </span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-body-secondary" href="#">
              <img
                src="twitter.svg"
                alt="twitter icon"
                className="bi"
                width="24"
                height="24"
              />
            </a>
          </li>
          <li className="ms-3">
            <a className="text-body-secondary" href="#">
              <img
                src="instagram.svg"
                alt="instagram icon"
                className="bi"
                width="24"
                height="24"
              />
            </a>
          </li>
          <li className="ms-3">
            <a className="text-body-secondary" href="#">
              <img
                src="facebook.svg"
                alt="facebook icon"
                className="bi"
                width="24"
                height="24"
              />
            </a>
          </li>
        </ul>
      </footer>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        defer
      ></script>
    </div>
  );
}
