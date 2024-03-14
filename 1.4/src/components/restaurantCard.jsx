import { IMG_CDN_URL, restarunrantList } from "./constant";

const RestarunrantCard = ({ name, cuisines, cloudinaryImageId, avgRating, locality }) => {
  // const waitTime = restarunrant.info.sla.slaString;
  return (
    <div className="card">
      <img src={IMG_CDN_URL+ cloudinaryImageId} />
      <h2>{name}</h2>
      <h4>{avgRating} stars</h4>
      <p>{locality}</p>
      <p className="cuisines">{cuisines.join(",")}</p>
    </div>
  )
}
export default RestarunrantCard;