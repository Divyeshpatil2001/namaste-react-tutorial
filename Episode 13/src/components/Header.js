import { Link } from "react-router-dom";
import { HEADER_LOGO } from "../utils/constant";
import { useEffect, useState, useContext } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

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

    const {loggedInUser} = useContext(UserContext);
    console.log(loggedInUser)

    // subscribing to store using a selector
    const cartItems = useSelector((store) => store.cart.items);

    return (
      <div className="flex justify-between bg-blue-50 shadow-lg m-2">
        <div className="logo-conatiner">
          <img
            className="w-36"
            src={HEADER_LOGO}
          ></img>
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
              <li className="px-4">
                online status: {onlineStatus ? "🟢" : "🔴"}
              </li>
              {/* <a href="/"></a> this getting refresh the whole application  */}
              {/* using link only hiearachhy change of components not getting whole application reload */}
              <li className="px-4"><Link to="/">Home</Link></li>
              <li className="px-4"><Link to="/grocery">Grocery</Link></li>
              <li className="px-4"><Link to="/about">About Us</Link></li>
              <li className="px-4"><Link to="/contact">Contact Us</Link></li>
              <li className="px-4 font-bold text-xl"><Link to="/cart">Cart ({cartItems.length} items)</Link></li>
              <button className="login" onClick={() => setBtnName(btnName== "login" ? "logout" : "login")}>{btnName}</button>
              <li className="px-4 font-bold"><Link to="/">{loggedInUser}</Link></li>
          </ul>
        </div>
      </div>
    );
  };
  
export default Header;