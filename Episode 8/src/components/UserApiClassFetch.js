import { Component } from "react";

class UserApiClassFetch extends Component {
  constructor(props) {
    super(props)
    this.state = {
        userInfo : {
            name : "default",
            location: "ddefault",
            avatar_url: "https://testuser.com"
        }
    }
  }
  async componentDidMount(){
    const data = await fetch("https://api.github.com/users/Divyeshpatil2001");
    const json = await data.json();
    this.setState({
      userInfo: json
    });
    console.log(json);
  }
  render() {
    const { name , location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <h1>class component fteching api</h1>
        <img src={avatar_url}/>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @patil</h4>
      </div>
    );
  }
}

export default UserApiClassFetch;