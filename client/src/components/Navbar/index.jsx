import logo from "../../assets/store-logo.png";
import "./navbar.css";
import cart_logo from "../../assets/cart-logo.png";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <h1>Next Tech</h1>
      </div>
      <div className="navbar-right">
        <ul>
          <li>Sign in</li>
          <li>Register</li>
          <li>About us</li>
        </ul>
        <div>
          <button>Login</button>
        </div>
        <div className="cart">
          <img src={cart_logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
