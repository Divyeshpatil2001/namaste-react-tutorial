import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
        count: 0,
        count2:2,
    }
    console.log(this.props.name + "child class constructor");
  }

  componentDidMount() {
    console.log(this.props.name + "child class did mount");
  }

  render() {
    const { name, location } = this.props;
    const { count,count2 } = this.state
    console.log(this.props.name + "child class render")
    return (
      <div className="user-card">
        <h1>class component</h1>
        <h1>count = {count}</h1>
        <h1>count2 = {count2}</h1>
        <button onClick={() => this.setState({count: this.state.count+1,count2: this.state.count2+2})}>count increase</button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @patil</h4>
      </div>
    );
  }
}

export default UserClass;
