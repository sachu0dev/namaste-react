import { GiHamburger } from "react-icons/gi";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../Utils/Redux/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="flex flex-col items-center m-4 mx-[25vw] my-8 text-dark-green bg-dark-gray rounded-3xl p-8 min-h-screen">
      <div className="w-full flex justify-center p-4 mb-4  items-center relative">
        <GiHamburger className="text-3xl absolute  left-1" />
        <h1 className="text-3xl font-bold">Your Cart</h1>
        {cartItem.length !== 0 ? (
          <button
            className="bg-light-orange text-light-gray p-2 text-md font-bold rounded-lg absolute right-1 flex justify-center items-center text-center"
            onClick={handleClearCart}
          >
            Not Hungery
            <MdDelete className="text-xl ml-2" />
          </button>
        ) : null}
      </div>
      <div>
        {cartItem.length === 0 && (
          <h1 className="text-xl">Cart is empty, Go grab somthing to eat</h1>
        )}
        <ItemList items={cartItem} />
      </div>
    </div>
  );
};

export default Cart;
