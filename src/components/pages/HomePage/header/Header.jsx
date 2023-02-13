import "./header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from '../../../../assets/img/logo.svg'
import cart from '../../../../assets/img/cart.svg'


function Header() {
  const { totalCount, totalPrice } = useSelector(({ cart }) => cart);

  return (
    <div className="header">
      <Link to="/">
        <div className="header__left">
          <img src={logo} alt="logo" />
          <div className="header__text">
            <h1 className="header__text__title">react pizza</h1>
            <p className="header__text__desc">
              самая вкусная пицца во вселенной
            </p>
          </div>
        </div>
      </Link>
      <Link to="/cart" className="header__right buttons homepage">
        <div className="header__digit">
          <p className="header__price">{totalPrice} ₽</p>
        </div>
        <div className="header__cart__count">
          <img src={cart} alt="cart" />
          <p>{totalCount}</p>
        </div>
      </Link>
    </div>
  );
}

export default Header;
