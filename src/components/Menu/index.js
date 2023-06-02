import MenuCard from "../MenuCard";


const Menu = ({onItemBuy}) => {
    let dish = [

        {
          name: 'buuza',
          price: 70,
          expense: 0,
          ingridients: ['meat', 'water', 'solt', 'onion',],
          image: "/content/face.png"
        },
    
        {
          name: 'blackSoup',
          price: 100,
          expense: 0,
          ingridients: ['meat', 'water', 'solt',],
          image: "/content/face.png"
        },
    
        {
          name: 'brtuch',
          price: 150,
          expense: 0,
          ingridients: ['salad', 'bread', 'meat', 'sauce', 'cheese'],
          image: "/content/face.png"
        }
      ];

    return (
        <div className="container mx-auto px-10 py-2 gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {dish.map((item) => (
          <MenuCard item={item} onClickBuy={onItemBuy} />
        ))}
      </div>
    )
}
export default Menu