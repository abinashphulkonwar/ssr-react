import { NavLink } from "remix";

export default function Nav() {
  let activeStyle = {
    textDecoration: "underline",
  };
  let activeClassName = "underline";
  return (
    <nav className="flex z-50 min-w-full max-w-full h-16 fixed top-0 bg-white">
      <ul className="flex z-50 min-w-full max-w-full h-16 justify-between items-center px-4 py-4">
        <li className="mr-1 pr-4 flex justify-between items-center border-r-2 border-r-black border-solid	">
          <img
            src="/logo.png"
            alt="way"
            className="h-10 w-15 rounded-full mr-2.5"
          />
          <NavLink to="" style={{outline :"none"}} >
            <h1 className="font-mono text-2xl font-bold tracking-wide outline-hidden scale-90 hover:text-blue-900 hover:scale-100 transition-transform duration-200">way</h1>
            </NavLink>
        </li>
       <div className="flex-1 flex flex-row justify-start items-center">
        <li className="ml-4 font-mone text-base	antialiased font-medium text-black no-underline scale-90 outline-hidden hover:text-blue-900 hover:scale-100 transition-transform duration-200"> <NavLink style={{outline :"none"}}  to="/signup">Sign Up</NavLink></li>
        <li className="ml-4 font-mone text-base	antialiased font-medium text-black no-underline scale-90 outline-hidden hover:text-blue-900 hover:scale-100 transition-transform duration-200"> <NavLink style={{outline :"none"}}  to="/login">Login</NavLink></li>
        </div>
      </ul>
    </nav>
  );
}

