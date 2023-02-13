import "./card.css";
import { useState } from "react";
import Button from "../Button";

function Card({ id, name, imgUrl, price, onAddPizza, countItems }) {
  const typePizza = ["тонкое", "традиционное"];
  const pizzaSize = [26, 30, 40];
  const [activePizza, setActivePizza] = useState(typePizza[0]);
  const [activePizzaSize, setActivePizzaSize] = useState(pizzaSize[0]);

  const onSelectActivePizza = (index) => {
    setActivePizza(index);
  };

  const onSelectPizzaSize = (index) => {
    setActivePizzaSize(index);
  };

  const onAddPizzaToCart = () => {
    const obj = {
      id,
      name,
      imgUrl,
      price,
      type: activePizza,
      size: activePizzaSize,
    };
    onAddPizza(obj);
  };

  return (
    <div className="card">
      <div className="card__pizza">
        <img src={imgUrl} alt={name} />
        <h3 className="card__pizza__name">{name}</h3>
      </div>
      <div className="pizza__props">
        <div className="pizza__var">
          {typePizza.map((item, i) => {
            return (
              <p
                key={`${item}_${i}`}
                className={`pizza__variable ${
                  activePizza === item ? "active" : ""
                }`}
                onClick={() => onSelectActivePizza(item)}
              >
                {item}
              </p>
            );
          })}
        </div>
        <div className="pizza__size">
          {pizzaSize.map((item, i) => {
            return (
              <p
                key={`${item}_${i}`}
                className={`pizza__prop ${
                  activePizzaSize === item ? "active" : ""
                }`}
                onClick={() => onSelectPizzaSize(item)}
              >
                {item} см.
              </p>
            );
          })}
        </div>
      </div>

      <div className="card__price">
        <h3>{price} р</h3>
        <Button countItems={countItems} onAddPizzaToCart={onAddPizzaToCart}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" />
          </svg>
          <span>Добавить</span>
          {countItems && <span className="card__count"> {countItems} </span>}
        </Button>
      </div>
    </div>
  );
}

export default Card;
