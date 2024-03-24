import { IMG_CDN_URL } from "./constant";

const RestarunrantCard = (restarunrant) => {
  const { name, cuisines, cloudinaryImageId, avgRating, locality } =
    restarunrant;
  const waitTime = restarunrant.sla.slaString;
  return (
    <div className="card w-[380px] h-[400px] rounded-[2rem] p-2 m-4 transition-all duration-100 ease-in overflow-hidden text-dark-green hover:p-4 hover:shadow-lg space-y-2">
      <div className="img-container h-[200px]">
        <img
          className="h-[200px] w-full object-cover rounded-3xl"
          src={IMG_CDN_URL + cloudinaryImageId}
        />
      </div>
      <h2 className="text-2xl font-bold line-clamp-2">{name}</h2>
      <h4 className="rating font-bold text-dark-black text-lg">
        {avgRating} stars | <span>{waitTime}</span>
      </h4>
      <p className="text-lg font-medium">{locality}</p>
      <p className="cuisines font-semibold text-dark-orange overflow-hidden whitespace-nowrap w-80 truncate">
        {cuisines.join(",")}
      </p>
    </div>
  );
};
export default RestarunrantCard;
