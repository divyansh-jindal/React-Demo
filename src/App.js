import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Body from "./components/Body";

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
