import React from "react";
import { Link, Outlet } from "react-router-dom";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: "name",
      location: "location",
    };
    console.log("constructor");
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  render() {
    console.log("render");
    return (
      <div>
        <h1>About us Page</h1>
        <p>
          {" "}
          This is the namaste react live Course Chapter - 07 - finding the path
        </p>
        <Link className="show-profile" to="/about/profile">
          show profile
        </Link>
        <Outlet />
      </div>
    );
  }
}
export default About;
