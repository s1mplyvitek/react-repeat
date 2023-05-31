const MenuOne = ({menu}) => {
    return (
        <div>
            Buuza: {menu[0].name} {menu[0].price} {menu[0].ingridients.join()}
        </div>
    )
}

export default MenuOne