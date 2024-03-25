import { Navigation } from "./navigation";

export function Header() {
  return (
    <div>
      <header className="border-b-2 py-4 flex items-center">
        <a href="/post">Post</a>
        <a href="/" className="grow text-center">
          Large
        </a>
        <a aria-label="Search">
          <svg
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="mx-3"
            viewBox="0 0 24 24"
          >
            <title>Search</title>
            <circle cx="10.5" cy="10.5" r="7.5"></circle>
            <path d="M21 21l-5.2-5.2"></path>
          </svg>
        </a>
        <a href="/login" className="border-2 rounded-md p-1">
          Sign up
        </a>
      </header>

      <Navigation />
    </div>
  );
}
