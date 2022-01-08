import { NavLink } from "remix";

export default function Nav() {
  let activeStyle = {
    textDecoration: "underline",
  };
  let activeClassName = "underline";
  return (
    <nav className="flex z-50 min-w-full max-w-full h-16 fixed top-0">
      <ul className="flex z-50 min-w-full max-w-full h-16 justify-between items-center px-4 py-4">
        <li className="mr-1 pr-4 flex justify-between items-center border-r-2 border-r-black border-solid	">
          <img
            src="/logo.png"
            alt="way"
            className="h-10 w-15 rounded-full mr-2.5"
          />
          <NavLink to="">
            <h1 className="font-mono text-2xl font-bold tracking-wide">way</h1>
          </NavLink>
        </li>
        <li className="flex-1 ml-4 "> hiiiiii</li>
      </ul>
    </nav>
  );
}
