import { IMG_CDN_URL, restarunrantList } from "./constant";

const RestarunrantCard = (restarunrant) => {
  const { name, cuisines, cloudinaryImageId, avgRating, locality } = restarunrant;
  const waitTime = restarunrant.sla.slaString;
  return (
    <div className="card">
      <div className="img-container">
      <img src={IMG_CDN_URL+ cloudinaryImageId} />
      </div>
      <h2>{name}</h2>
      <h4>{avgRating} stars | <span>{waitTime}</span></h4>
      <p>{locality}</p>
      <p className="cuisines">{cuisines.join(",")}</p>
    </div>
  )
}
export default RestarunrantCard;