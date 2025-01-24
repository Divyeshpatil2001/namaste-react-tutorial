import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
        count: 0,
        count2:2,
    }
    console.log("ddbs")
  }

  render() {
    const { name, location } = this.props;
    const { count,count2 } = this.state
    console.log("ddb11s")
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
// note class bases component
// when we loading a class component on the webpage that means we are creting a new instance of class and giving it some props
// whenever we create a instance of class constructor is called and this is best place to recieve props and also for create state varaibles.
// how to create state var - this.state = {count: 0} //this.state holding whole object of all state var

// never update state var using directly(count=count+1) instead do setstate function used.