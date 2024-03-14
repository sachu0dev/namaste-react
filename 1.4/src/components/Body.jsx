const body = () => {
  return (
    <div classname="restaurant-list">
      {
        restarunrantlist.map((restarunrant) => {
          return <restarunrantcard {...restarunrant.info} />
        })
      }
    </div>
  );
}

export default body;