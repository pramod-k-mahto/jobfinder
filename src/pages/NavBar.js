import "./Navbar.css";
import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <>
      <div className="Navbar">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/About"}>About</NavLink>
        <NavLink to={"/Job"}>Job</NavLink>
        <NavLink to={"/Contact"}>Contact</NavLink>
        <NavLink to={"/Login"}>Login</NavLink>
        <NavLink to={"/SingUp"}>SingUp</NavLink>
        <NavLink to={"/PostJob"}>PostJob</NavLink>
        <NavLink to={"/Profile"}>Profile</NavLink>
      </div>
    </>
  );
}

export default NavBar;
