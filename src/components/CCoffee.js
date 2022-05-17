import React from "react";

//create new class ccoffee from react component
class CCoffee extends React.Component {
  //constructor allows us to add properties and features
  constructor(props) {
    super(props);
    //state is defined and is an object... state is immutable ...also is the old state
    this.state = {
      count: 0,
      another: "plop",
    };
  }
  // uses built in method this.setState merges old state to new state
  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }
  //every class component has render method that returns the jsx
  render() {
    const { count } = this.state;
    const { firstName } = this.props;
    return (
      <>
        <h1>Coffee List (CC)</h1>
        <p>Hello {firstName}</p>
        <p>You clicked the button {count} times.</p>
        <button onClick={() => this.handleClick()}>Click Me</button>
      </>
    );
  }
}

export default CCoffee;
