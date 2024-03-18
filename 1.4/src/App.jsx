import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About.jsx";
import Body from "./components/Body.jsx";
import Error from "./components/Error.jsx";
import Footer from "./components/Footer.jsx";
import { Header, Title } from "./components/Header.jsx";
const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
root.render(<RouterProvider router={appRouter} />);
// pollyfil it genartes the new code to old code that broweser may understand for: eg : array.map() to myMap() this is done by bable
// browser list conatains  list of broweser and is responsovle for telling bable for what it has to convert
// babel plugin transform remove console to remove console logs
