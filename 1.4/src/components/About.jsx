import { Outlet } from "react-router-dom";
const About = () => {
  return (
    <div>
      <h1>About us Page</h1>
      <p>
        {" "}
        This is the namaste react live Course Chapter - 07 - finding the path
      </p>

      <Outlet />
    </div>
  );
};
export default About;
