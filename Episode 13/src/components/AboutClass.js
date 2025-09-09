import {Component} from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserApiClassFetch from "./UserApiClassFetch";
import UserContext from "../utils/userContext";

class AboutClass extends Component {
    constructor(props) {
        super(props);

        console.log("parent class constructoer")
    }
    componentDidMount() {
        console.log("parent class did mount");
    }
    componentWillUnmount () {
        console.log("component will unmount1")
      }
    render() {
        console.log("parent class render")
        return(
            <div>
            <h1>About class component</h1>
            <h2>this is about page of website</h2>
            <div>
                <UserContext.Consumer>
                    {({loggedInUser}) => <h1 className="font-bold">{loggedInUser}</h1>}
                </UserContext.Consumer>
            </div>
            {/* <UserClass name={"nikhil"} location={"classy"}/> */}
            {/* <UserClass name={"divyesh"} location={"classy"}/>
            <UserApiClassFetch /> */}
            <User />
        </div>
        )
    }
}

export default AboutClass;