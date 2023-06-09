import { Link } from "react-router-dom";
import style from "./MenuCard.module.css"
import { addToCart } from "../../store/slices/cartSlice";
import { useDispatch } from "react-redux";

const MenuCard = ({ item }) => {
    const dispatch = useDispatch();
    const ingridients = (
        <div className="">
            {item.ingridients.join(", ")}
        </div>
    );

    return (
        <div className={"rounded shadow-lg text-center overflow-hidden " + style.test}>
            <img className="container" src={item.image} />
            <div className="p-6">
                <Link to={`/catalog/${item.id}`}>
                    <div className=" text-3xl font-bold">{item.name}</div>
                </Link>

                <div className="p-2">
                    {ingridients}
                </div>
                <button
                    onClick={() => dispatch(addToCart(item))}
                    class="w-full  bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-3 px-4 border border-blue-500 hover:border-transparent rounded">
                    Купить
                </button>
            </div>


        </div>
    )
}

export default MenuCard