import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return(
        <div>
            <h1>About</h1>
            <h2>this is about page of website</h2>
            {/* to examine class and functional comopnent difference */}
            <User name={"divyesh"} location={"functional"}/>
            <UserClass name={"nikhil"} location={"classy"}/>
        </div>
    )
}

export default About;