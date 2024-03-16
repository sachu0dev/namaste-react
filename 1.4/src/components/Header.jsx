export const  Title= ()=> {
  return (<a href="/" className="logo">
    Butter & Nan
  </a>);
}
export const Header = () => {
  return <div className="header ">
    <Title />
    <div className="nav-items">
      <ul>
        <li><i className="fa-solid fa-house"></i> Home</li>
        <li><i className="fa-solid fa-gift"></i> Offers</li>
        <li><i className="fa-solid fa-question"></i> Help</li>
        <li><i className="fa-solid fa-cart-shopping"></i> Cart</li>
      </ul>
    </div>
  </div>
} 