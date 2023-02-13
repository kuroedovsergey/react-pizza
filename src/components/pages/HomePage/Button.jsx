function Button({ onAddPizzaToCart, children, countItems }) {
  return (
    <button
      onClick={onAddPizzaToCart}
      className={`${
        countItems > 0
          ? "card__price__btn--active card__price__btn buttons"
          : "card__price__btn card__price--price buttons"
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
