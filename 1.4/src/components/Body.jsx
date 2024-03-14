import { restarunrantList } from "./constant.js";
import RestarunrantCard from "./restaurantCard.jsx";
const Body = () => {
  return (
    <div className="restaurant-list">
      {
        restarunrantList.map((restarunrant) => {
          return <RestarunrantCard {...restarunrant.info} key={restarunrant.info.id}/>
        })
      }
    </div>
  );
}

export default Body;