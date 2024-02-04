import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }
  componentDidMount() {
    console.log("Parent componentDidMount");
  }
  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About</h1>
        <h2>This a demo project</h2>
        {/* <User name={"Divyansh Jindal (FC)"} /> */}
        <UserClass name={"Divyansh (CC)"} location={"IIIT Una class"} />
        <UserClass name={"Jindal (CC)"} location={"IIIT Una class"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This a demo project</h2>
//       {/* <User name={"Divyansh Jindal (FC)"} /> */}
//       <UserClass name={"Divyansh Jindal (CC)"} location={"IIIT Una class"} />
//     </div>
//   );
// };

export default About;
