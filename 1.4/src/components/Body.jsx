import { useState } from "react";
import { restarunrantList } from "./constant.js";
import RestarunrantCard from "./restaurantCard.jsx";
const Body = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [searchClicked, setSearchClicked] = useState("false");
  return (
    <>
    <div className="search-container">
      <input type="text" className="search-input" placeholder="Search" value={searchTxt} onChange={(e) => setSearchTxt(e.target.value)}/>
      <button className="search-btn" onClick={()=> {
        if(searchClicked === "true"){
          setSearchClicked("false")
          return;
        }
        setSearchClicked("true")
        }}>Search</button>
      <h1>{searchClicked}</h1>
    </div>
    <div className="restaurant-list">
      {
        restarunrantList.map((restarunrant) => {
          return <RestarunrantCard {...restarunrant.info} key={restarunrant.info.id}/>
        })
      }
    </div>
    </>
  );
}

export default Body;