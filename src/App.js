import { useState } from "react";
import Menu from "./components/Menu";



function App() {
  const [cart, setCart] = useState([]);

  const addToCart = item => {
    setCart([...cart, item]);
  };
  

  return (
    <>
      <div className="mx-auto px-10 py-5 container grid justify-end ">
        <div className="text-2xl">Корзина</div>
        <div>Количество: {cart.length}</div>
        <div>Сумма: {cart.reduce((sum, item) => (sum += item.price), 0)} руб</div>
      </div>
      <div>
        <Menu onItemBuy={(item) => addToCart(item)}></Menu>
      </div>
    </>
  );
}

export default App;
