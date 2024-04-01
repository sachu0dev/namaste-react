import React from "react";
import { Link, Outlet } from "react-router-dom";
import UserContext from "../Utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: "name",
      location: "location",
    };
  }
  render() {
    return (
      <div className="h-full">
        <h1>About us Page</h1>
        <div>
          <UserContext.Consumer>
            {({ loggedInUser }) => <p className="text-xl">{loggedInUser}</p>}
          </UserContext.Consumer>
        </div>
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
