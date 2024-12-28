import { HEADER_LOGO } from "../utils/constant";
import { useState } from "react";

const Header = () => {
    const [btnName,setBtnName] = useState("login")
    // when state var change through re-render the header component
    // when btn click what happen btnvalue change and then re render the component and now at now this time of render component value is updated.(thats why const value is change and updated)
    console.log("header")
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
              <button className="login" onClick={() => setBtnName(btnName== "login" ? "logout" : "login")}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };
  
export default Header;