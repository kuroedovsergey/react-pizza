import "./cart.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { setClearCart } from "../../../redux/actions/cart";
import { useDispatch } from "react-redux";
import { setRemoveCartItem } from "../../../redux/actions/cart";
import { setPlusCartItem } from "../../../redux/actions/cart";
import { setMinusCartItem } from "../../../redux/actions/cart";
import EmptyCart from "./EmptyCart";

function Cart() {
  const { totalCount, totalPrice, items } = useSelector(({ cart }) => cart);
  const dispatch = useDispatch();

  const getPizzasCart = Object.keys(items).map((key) => {
    return items[key].pizzas[0];
  });

  const onSetClearCart = () => {
    dispatch(setClearCart());
  };

  const onSetRemoveItemCart = (id) => {
    dispatch(setRemoveCartItem(id));
  };

  const onSetPlusCartItem = (id) => {
    dispatch(setPlusCartItem(id));
  };

  const onSetMinusCartItem = (id) => {
    dispatch(setMinusCartItem(id));
  };

  return (
    <div className="content">
      {
        totalCount ? ( <div className="container container--cart">
        <div className="cart">
          <div className="cart__top">
            <h2 className="content__title">
              <svg
                width="29"
                height="29"
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 24 24"
              >
                <path d="M8.5,19A1.5,1.5,0,1,0,10,20.5,1.5,1.5,0,0,0,8.5,19ZM19,16H7a1,1,0,0,1,0-2h8.49121A3.0132,3.0132,0,0,0,18.376,11.82422L19.96143,6.2749A1.00009,1.00009,0,0,0,19,5H6.73907A3.00666,3.00666,0,0,0,3.92139,3H3A1,1,0,0,0,3,5h.92139a1.00459,1.00459,0,0,1,.96142.7251l.15552.54474.00024.00506L6.6792,12.01709A3.00006,3.00006,0,0,0,7,18H19a1,1,0,0,0,0-2ZM17.67432,7l-1.2212,4.27441A1.00458,1.00458,0,0,1,15.49121,12H8.75439l-.25494-.89221L7.32642,7ZM16.5,19A1.5,1.5,0,1,0,18,20.5,1.5,1.5,0,0,0,16.5,19Z" />
              </svg>
              Корзина
            </h2>
            <div onClick={onSetClearCart} className="cart__clear">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 5H4.16667H17.5"
                  stroke="#B6B6B6"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z"
                  stroke="#B6B6B6"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.33337 9.16667V14.1667"
                  stroke="#B6B6B6"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.6666 9.16667V14.1667"
                  stroke="#B6B6B6"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Очистить корзину</span>
            </div>
          </div>
          <div className="content__items">
            {getPizzasCart.map((obj) => (
              <CartItem
                key={obj.id}
                totalPrice={items[obj.id].totalPrice}
                totalCount={items[obj.id].pizzas.length}
                onSetRemoveItemCart={onSetRemoveItemCart}
                onSetPlusCartItem={onSetPlusCartItem}
                onSetMinusCartItem={onSetMinusCartItem}
                {...obj}
              />
            ))}
          </div>
          <div className="cart__bottom">
            <div className="cart__bottom-details">
              <span>
                Всего пицц: <b>{totalCount} шт.</b>{" "}
              </span>
              <span>
                Сумма заказа: <b className="total">{totalPrice} ₽</b>{" "}
              </span>
            </div>
            <div className="cart__bottom-buttons">
              <a
                href="/"
                className="button button--outline button--add go-back-btn buttons"
              >
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 13L1 6.93015L6.86175 1"
                    stroke="#D3D3D3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Вернуться назад</span>
              </a>
              <div className="button pay-btn buttons">
                <span>Оплатить сейчас</span>
              </div>
            </div>
          </div>
        </div>
      </div>) : (<EmptyCart />)
      }
    </div>
  );
}


export default Cart;
