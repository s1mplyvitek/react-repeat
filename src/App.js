import DishList from "./components/Dish";
import MenuOne from "./components/MenuOne";



function App() {

  let dish = [

    {
      name: 'buuza',
      price: 70,
      expense: 0,
      ingridients: ['meat', 'water', 'solt', 'onion',],
    },

    {
      name: 'blackSoup',
      price: 100,
      expense: 0,
      ingridients: ['meat', 'water', 'solt',],
    },

    {
      name: 'brtuch',
      price: 150,
      expense: 0,
      ingridients: ['salad', 'bread', 'meat', 'sauce', 'cheese'],
    }
  ];

  return (
    <div>
      <h1>Menu</h1>
      <MenuOne menu={dish} />
      {dish.map((item) => (
        <DishList nameDish={item.name} priceDish={item.price} ingridientsDish={item.ingridients} />
          
      ))}

    </div>

  );
}

export default App;
