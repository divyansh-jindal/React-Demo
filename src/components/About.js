import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This a demo project</h2>
      {/* <User name={"Divyansh Jindal (FC)"} /> */}
      <UserClass name={"Divyansh Jindal (CC)"} location={"IIIT Una class"} />
    </div>
  );
};
export default About;
