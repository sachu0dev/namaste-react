const BillDisplay = ({ items }) => {
  return (
    <div className="w-full flex flex-col bg-dark-green p-4 rounded-lg">
      <div className="flex justify-center items-center text-xl font-bold text-light-gray">Bill Details</div>
      <div>
        <ul>
          {items.map((item) => {
            return (
              <li className="text-light-gray">{item.card.info.name}</li>
            )
          })}
        </ul>
      </div>
    </div>
  )
};

export default BillDisplay;
