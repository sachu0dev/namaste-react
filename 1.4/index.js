import React from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));
const heading1 = React.createElement(
  "h1",
  {
    key: "h1",
    id: "title",
  },
  "heading 1" 
);
const heading2 = (<h2 id="title" key="h2">Namaste test</h2>);
const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading1, heading2]
);
function Title(){
  return (<a href="/" className="logo">
    butter & Nan
    {
      // this is comment
      // jsx is not mandatory in react
      // es6 is not mandatory 
    }
    </a>);
}
const  Header = ()=>{
  return <div className="header ">
    <Title/>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
    </div>
}

const RestarunrantCard = ()=>{
  return (
    <div className="card">
      <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_628,h_704/TopPicks/29826715A.png" />
      <h2>Burger</h2>
    </div>
  )
}
const Body = ()=>{
  return (
    <RestarunrantCard/>
  );
}
const Footer = ()=>{
  return (
    <h4>footer</h4>
  )
}
const AppLayout = ()=>{
  return (
    <>
    <Header/>
    <Body/>
    <Footer/>
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
root.render(<AppLayout/>);
// pollyfil it genartes the new code to old code that broweser may understand for: eg : array.map() to myMap() this is done by bable
// browser list conatains  list of broweser and is responsovle for telling bable for what it has to convert 
// babel plugin transform remove console to remove console logs