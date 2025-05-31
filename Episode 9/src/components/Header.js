import { Link } from "react-router-dom";
import { HEADER_LOGO } from "../utils/constant";
import { useEffect, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnName,setBtnName] = useState("login")
    // when state var change through re-render the header component
    // when btn click what happen btnvalue change and then re render the component and now at now this time of render component value is updated.(thats why const value is change and updated)
    console.log("header");
    // if useeffect is no dependency array it will call on every render of component
    // if useeffect is empty dependency array it will call only on initial render(just once)
    // if useeffect is [statevar] dependency array called on everytime statevar is updated
    useEffect(() => {
      console.log("header useeffect");
    },[])
    const onlineStatus = useOnlineStatus();
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
              <li>
                online status: {onlineStatus ? "🟢" : "🔴"}
              </li>
              {/* <a href="/"></a> this getting refresh the whole application  */}
              {/* using link only hiearachhy change of components not getting whole application reload */}
              <li><Link to="/">Home</Link></li>
              <li><Link to="/grocery">Grocery</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/">Cart</Link></li>
              <button className="login" onClick={() => setBtnName(btnName== "login" ? "logout" : "login")}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };
  
export default Header;