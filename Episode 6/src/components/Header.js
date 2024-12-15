import { HEADER_LOGO } from "../utils/constant";
import { useState } from "react";

const Header = () => {
    const [btnName,setBtnName] = useState("login")
    return (
      <div className="header">
        <div className="logo-conatiner">
          <img
            className="logo"
            src={HEADER_LOGO}
          ></img>
        </div>
        <div className="nav-items">
          <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Cart</li>
              <button className="login" onClick={() => setBtnName("logout")}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };
  
export default Header;