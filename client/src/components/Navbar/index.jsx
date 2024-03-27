import logo from "../../assets/store-logo.png";
import "./navbar.css";
import cart_logo from "../../assets/cart-logo.png";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <a href="/">NextTech</a>
      </div>
      <div className="navbar-right">
        <ul>
          <li><a href="/sign-up">Sign up</a></li>
          <li><a href="/sign-in">Sign in</a></li>
          <li><a href="/about-us">About Us</a></li>
        </ul>
        <div className="cart">
          <img src={cart_logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
