const root = ReactDOM.createRoot(document.getElementById("root"));
const heading1 = React.createElement(
  "h1",
  {
    key: "heading1",
    id: "title",
  },
  "heading 1"
);
const heading2 = React.createElement(
  "h2",
  {
    key: "heading2",
    id: "title",
  },
  "heading 2"
);
const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading1, heading2]
);

root.render(container);
// root render overwrites or replace the previous insides