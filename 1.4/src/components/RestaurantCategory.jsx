const RestaurantCategory = ({ itemCards }) => {
  console.log(itemCards);
  return (
    <div>
      {itemCards.map((item) => {
        return (
          <div>
            <h1>{item.card.info.name}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantCategory;
