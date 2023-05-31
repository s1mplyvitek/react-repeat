const DishList = ({  nameDish, priceDish, ingridientsDish}) => {
    return (



        <div>
             {nameDish} {priceDish} {ingridientsDish.join()}
        </div>
        // <div>
        //     Name:{dish[0].name} Ingridients:{dish[0].ingridients.join()} Price:{dish[0].price}

        //     <div>
        //         <p className="">Name:</p>{dish.map((item) => {
        //             return (
        //                 item.name
        //             )
        //         })}
        //         <p>Ingridients</p>
        //         {dish.map((item) => {
        //             return (
        //                 item.ingridients.join()
        //             )
        //         })}
        //         <p>Price</p>
        //         {dish.map((item) => {
        //             return (item.price)
        //         })}
        //         <div>
        //             Name - {nameDish}
        //             Price - {priceDish}
        //         </div>
                
        //     </div>
        // </div>


    )
}
export default DishList