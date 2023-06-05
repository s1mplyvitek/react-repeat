import CartIcon from "../svg/CartIcon";


const CartWidget = ({ cart }) => {
    return (
        <div className="mx-auto px-10 py-1 container grid justify-end ">
            <div>
                <CartIcon />
            </div>
            <div>Количество: {cart.length}</div>
            <div>Сумма: {cart.reduce((sum, item) => (sum += item.price), 0)} руб</div>
        </div>
    );
};

export default CartWidget