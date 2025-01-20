import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="md:mx-0 md:flex md:items-center pt-4 justify-between md:pt-4">
      <Link to="/">
        <p className="font-semibold">
          local
          <span className="text-green-500 underline cursor-pointer">blogg</span>
        </p>
      </Link>

      <ul className="flex gap-4 cursor-pointer mt-2">
        <NavLink to="/about">about</NavLink>
        <NavLink to="/login">
          {" "}
          <button className="bg-green-200 border border-opacity-50 border-green-700 text-green-800 rounded-md text-left px-2 font-medium">
            get started{" "}
          </button>
        </NavLink>
      </ul>
    </header>
  );
}

export default Header;
