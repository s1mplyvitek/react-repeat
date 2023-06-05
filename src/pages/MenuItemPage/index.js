import { useParams } from "react-router-dom";
import dish from "../../fakeData/menu";

const MenuItemPage = () => {
    const { id } = useParams();
    let menuItem = dish.find((item) => item.id == id);
    return (
        <>
            <h1>{menuItem.name} {menuItem.price} {menuItem.ingridients.join(", ")}</h1>
            <img src={menuItem.image}></img>
        </>
    );
};

export default MenuItemPage