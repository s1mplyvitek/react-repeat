import CartIcon from "../svg/CartIcon";


const CartWidget = ({ cart, sum }) => {
    return (
        <div className="grid justify-end shadow-lg rounded p-3 sticky top-0 bg-slate-50">
            <div>
                <CartIcon />
            </div>
            <div>Количество: {cart.length}</div>
            <div>Сумма: { sum } руб</div>
        </div>
    );
};

export default CartWidget