import React from "react";
import ReactDOM from "react-dom";

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I am a h1 tag"),
//     React.createElement("h2", {}, "I am a h2 tag"),
//   ])
// );

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React"
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// // const heading = React.createElement("h1", { id: "heading" }, "Hello");
// const Title = () => <h1>This is title component</h1>;
// const HeadingComponent = () => {
//   return (
//     <div>
//       <Title />
//       <h1>Functional Component</h1>
//     </div>
//   );
// };
// const jsxheading = <h1 className="head">Hello from Jsx</h1>;

const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#f0f0f0",
};
const RestrauntCard = () => {
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0vvulfbahjxjz6k4uwi"
      ></img>
      <h3>Meghna Foods</h3>
      <h4>Biryani, North Indian</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
        <RestrauntCard />
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
