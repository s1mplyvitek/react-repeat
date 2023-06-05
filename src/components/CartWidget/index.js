

const CartWidget = ({cart}) => {
    return (
        <div className="mx-auto px-10 py-5 container grid justify-end ">
            <div className="text-2xl">Корзина</div>
            <div>Количество: {cart.length}</div>
            <div>Сумма: {cart.reduce((sum, item) => (sum += item.price), 0)} руб</div>
        </div>
    );
};

export default CartWidget