import logo from "../Photos/main-logo.png";
import '../CSS/Navbar.css'
const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="nav_content">
          <img src={logo} alt="" />
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Invest</li>
            <li>Contact</li>
            <li>Services</li>
          </ul>
          <div className="btns">
            <button className="nav_btn">Login</button>
            <button className="nav_btn">Register</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
