import { useDispatch } from "react-redux";
import CartIcon from "../svg/CartIcon";
import { clearCart } from "../../store/slices/cartSlice";


const CartWidget = ({ cart, sum }) => {
    const dispatch = useDispatch();
    return (
        <div className="grid grid-rows-2 grid-flow-col justify-end shadow-lg rounded p-2 sticky top-0 bg-slate-100">
            <div className="mx-auto m-2">
                <CartIcon />
            </div>
            <div onClick={() => dispatch(clearCart())} className=""><button type="button" class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-xl px-5 py-2.5 text-center m-2">⟳</button></div>
            <div className="text-center text-4xl text-red-700 font-sans">🍴{cart.length}</div>
            <div className="text-center m-3 text-2xl">{sum} руб
            </div>
        </div>
    );
};

export default CartWidget