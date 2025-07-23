import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <h1 className="text-2xl font-bold">My Application</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
             <Link href="/home" className="text-white hover:underline">Home</Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:underline">About</Link>
          </li>
          <li>
            <Link href="/posts" className="text-white hover:underline">Post</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;