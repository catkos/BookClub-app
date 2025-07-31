import { NavLink } from "react-router";

const Navigation = () => {
  return (
    <>
      <nav className="relative z-50 flex flex-row h-20 bg-tussock-50 text-tussock-950 gap-20 uppercase items-center justify-center">
        <NavLink
          to="/"
          className="flex justify-center items-center cursor-pointer h-full w-32 p-5 text-center"
        >
          Log In
        </NavLink>
        <NavLink
          to="/home"
          className="flex justify-center items-center cursor-pointer h-full w-32 p-5 text-center"
        >
          Home
        </NavLink>
      </nav>
    </>
  );
};

export default Navigation;
