import { IMG_CDN_URL } from "./constant";
const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
        return (
          <div
            key={item.card.info.id}
            className="p-2 m-2  border-dark-cream border-b-2 flex justify-between items-center "
          >
            <div className="w-[60%]">
              <span className="text-xl font-semibold">
                {item.card.info.name}
              </span>
              <p className="text-md font-bold text-light-orange">
                ₹ {item.card.info.price / 100}
              </p>
              <p className="text-sm">{item.card.info.description}</p>
            </div>
            {item.card.info.imageId ? (
              <div className="relative">
                <button className="p-2 rounded-lg bottom-1 left-12 bg-light-orange text-light-gray font-bold shadow-lg absolute">
                  ADD +
                </button>
                <img
                  className="w-[10rem] h-[8rem] object-cover rounded-2xl"
                  src={IMG_CDN_URL + item.card.info.imageId}
                  alt="img not found"
                />
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
