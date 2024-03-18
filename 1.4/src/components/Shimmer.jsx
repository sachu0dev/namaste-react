const Cards = () => {
  return (
    <div className="shimmer-card">
      <div className="img-shimmer"></div>
      <h2></h2>
      <h4></h4>
      <p></p>
    </div>
  );
};

const SearchSrimmer = () => {
  return (
    <div className="search-container">
      <div className="shimmer-input"></div>
      <button className="shimmer-btn"></button>
    </div>
  );
};
const Shimmer = () => {
  return (
    <>
      <SearchSrimmer />
      <div className="restaurant-list">
        {Array(12)
          .fill("")
          .map((e, index) => (
            <Cards key={index} />
          ))}
      </div>
    </>
  );
};

export default Shimmer;
