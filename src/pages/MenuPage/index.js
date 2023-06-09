import MenuCard from "../../components/MenuCard";
import dish from "../../fakeData/menu";
import { addToCart } from "../../store/slices/cartSlice";


const Menu = () => {

  return (
    <div className={"gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"}
    >
      {dish.map((item) => (
        <MenuCard item={item} />
      ))}
    </div>
  )
}
export default Menu