import MenuCard from "../../components/MenuCard";
import dish from "../../fakeData/menu";


const Menu = ({ onItemBuy, }) => {

  return (
    <div className={"container mx-auto px-10 py-2 gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"}
    >
      {dish.map((item) => (
        <MenuCard item={item} onClickBuy={onItemBuy} />
      ))}
    </div>
  )
}
export default Menu