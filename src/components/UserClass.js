import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { count: 0, count2: 1 };
    // console.log(this.props.name + "Child Constructor");

    this.state = {
      count: 0,
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
  }
  async componentDidMount() {
    // console.log(this.props.name + "Child componentDidMount");
    const data = await fetch("https://api.github.com/users/divyansh-jindal");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  componentDidUpdate() {
    console.log("Component did update");
  }

  render() {
    // console.log(this.props.name + "Child Render");
    // const { name, location } = this.props;
    const { count, count2 } = this.state;
    const { name, location, avatar_url } = this.state.userInfo;

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
        <br></br>
        <img className="avatar" src={avatar_url}></img>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: divyanshjindal18@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
