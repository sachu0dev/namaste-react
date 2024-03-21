export function filterData(searchTxt, allRestaurants) {
  if (searchTxt !== "") {
    return allRestaurants.filter((restarunrant) =>
      restarunrant.info.name.toLowerCase().includes(searchTxt.toLowerCase())
    );
  }
  return allRestaurants;
}