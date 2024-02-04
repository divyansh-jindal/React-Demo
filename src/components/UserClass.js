import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, count2: 1 };
    console.log("Child Constructor");
  }
  componentDidMount() {
    console.log("Child componentDidMount");
  }
  render() {
    console.log("Child Render");
    const { name, location } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="user-card">
        <h1>Count: {count}</h1>
        {/* <h1>Count2: {count2}</h1> */}
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              // count2: this.state.count2 + 1,
            });
          }}
        >
          Count Increase
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: divyanshjindal18@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
