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
function HeaderComponet(){
  return <div>
    {heading1}
    {heading2}
    <h1>this is a h1 tag</h1>
    <h2>this is h2</h2>
    </div>
}
root.render(<HeaderComponet/>);
// pollyfil it genartes the new code to old code that broweser may understand for: eg : array.map() to myMap() this is done by bable
// browser list conatains  list of broweser and is responsovle for telling bable for what it has to convert 
// babel plugin transform remove console to remove console logs