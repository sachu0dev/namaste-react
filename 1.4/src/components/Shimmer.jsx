const Cards = () => {
  return (
    <div className="shimmer-card w-[380px] h-[400px] rounded-xl p-4 m-4">
      <div className="img-shimmer w-full h-[200px] bg-lightgray rounded-xl mb-4"></div>
      <h2 className=" h-10 bg-lightgray mb-4"></h2>
      <h4 className="w-[40%] h-5 bg-lightgray mb-4"></h4>
      <p className="w-[80%] h-4 bg-lightgray"></p>
    </div>
  );
};

const SearchSrimmer = () => {
  return (
    <div className="search-container flex w-[100vw] h-[8vh] justify-center items-center">
      <div className="shimmer-input  w-[30vw] h-12 bg-lightgray rounded-full m-4"></div>
      <button className="shimmer-btn w-20 h-12 rounded-full bg-lightgray"></button>
    </div>
  );
};
const Shimmer = () => {
  return (
    <>
      <SearchSrimmer />
      <div className="restaurant-list grid px-[20vh] grid-cols-4 justify-center items-center flex-wrap">
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
