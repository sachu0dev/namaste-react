import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body.jsx";
import Footer from "./components/Footer.jsx";
import { Header, Title } from "./components/Header.jsx";
import { IMG_CDN_URL } from "./components/constant.js";
const root = ReactDOM.createRoot(document.getElementById("root"));


const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>



  )

  {
    /**
     * header
     *  - logo
     *  - nav items(right side)
     *  - cart
     * body
     *  - search bar
     *  - Reastrauntlist
     *    - restarunrant card
     *      - Image
     *      - name
     *      - rating
     *      - cusines
     * footer
     *  - links 
     *  - copyright
     */
  }
}
root.render(<AppLayout />);
// pollyfil it genartes the new code to old code that broweser may understand for: eg : array.map() to myMap() this is done by bable
// browser list conatains  list of broweser and is responsovle for telling bable for what it has to convert 
// babel plugin transform remove console to remove console logs
