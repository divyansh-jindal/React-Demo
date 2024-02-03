const User = (props) => {
  return (
    <div className="user-card">
      <h2>Name: {props.name}</h2>
      <h3>Location: IIIT Una</h3>
      <h4>Contact: divyanshjindal18@gmail.com</h4>
    </div>
  );
};

export default User;
