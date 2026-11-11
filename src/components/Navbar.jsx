import { Link, NavLink } from "react-router-dom";
import { PawPrint } from "lucide-react";
import { useAuth } from "../context/useAuth";

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <PawPrint size={30} />
        <span>Pet Haven</span>
      </Link>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/pets">Our Pets</NavLink>
        <NavLink to="/membership">Membership</NavLink>
        <NavLink to="/release">Release a Pet</NavLink>

        {user && (
          <NavLink
            to={
              user.role === "admin" ? "/admin-dashboard" : "/member-dashboard"
            }
          >
            Dashboard
          </NavLink>
        )}
      </div>

      {user ? (
        <div className="navbar-auth">
          <span className="navbar-user">Welcome, {user.name}</span>

          <button className="navbar-logout" onClick={logout}>
            Logout
          </button>
        </div>
      ) : (
        <Link to="/login" className="navbar-login">
          Login
        </Link>
      )}
    </nav>
  );
}

export default Navbar;
