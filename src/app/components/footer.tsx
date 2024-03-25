import Image from "next/image";

export function Footer() {
  return (
    <footer className="flex items-center py-4 mb-8 border-t-2">
      <span>© 2023 Company, Inc</span>

      <div className="grow"></div>

      <ul className="flex gap-4">
        <a href="#">
          <Image
            src="twitter.svg"
            alt="twitter icon"
            className="bi"
            width="24"
            height="24"
          />
        </a>
        <a href="#">
          <Image
            src="instagram.svg"
            alt="instagram icon"
            className="bi"
            width="24"
            height="24"
          />
        </a>
        <a href="#">
          <Image
            src="facebook.svg"
            alt="facebook icon"
            className="bi"
            width="24"
            height="24"
          />
        </a>
      </ul>
    </footer>
  );
}
