const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = (arr) => arr.reduce((init, obj) => obj.price + init, 0);

const getSum = (newObj) => {
  let allPizzas, totalPrice;
  if (typeof newObj === "object") {
    allPizzas = [].concat.apply(
      [],
      Object.values(newObj).map((obj) => obj.pizzas)
    );
    totalPrice = getTotalPrice(allPizzas);
  } else {
    totalPrice = getTotalPrice(newObj);
  }

  return {
    allPizzas,
    totalPrice,
  };
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_PIZZA":
      const currentArr = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].pizzas, action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          ...state.pizzas,
          pizzas: currentArr,
          totalPrice: getTotalPrice(currentArr),
        },
      };

      const { totalPrice, allPizzas } = getSum(newItems);

      return {
        ...state,
        items: newItems,
        totalCount: allPizzas.length,
        totalPrice,
      };

    case "PLUS_CART_ITEM": {
      const newArr = [
        ...state.items[action.payload].pizzas,
        state.items[action.payload].pizzas[0],
      ];

      const newItems = {
        ...state.items,
        [action.payload]: {
          pizzas: newArr,
          totalPrice: getTotalPrice(newArr),
        },
      };

      const { totalPrice, allPizzas } = getSum(newItems);

      return {
        ...state,
        items: newItems,
        totalPrice,
        totalCount: allPizzas.length,
      };
    }

    case "MINUS_CART_ITEM": {
      const oldArr = state.items[action.payload].pizzas;
      const newArr =
        oldArr.length > 1
          ? state.items[action.payload].pizzas.slice(1)
          : oldArr;

      const newObj = {
        ...state.items,
        [action.payload]: {
          pizzas: newArr,
          totalPrice: getTotalPrice(newArr),
        },
      };

      const { totalPrice, allPizzas } = getSum(newObj);

      return {
        ...state,
        items: newObj,
        totalPrice,
        totalCount: allPizzas.length,
      };
    }

    case "REMOVE_CART_ITEM": {
      const newItems = JSON.parse(JSON.stringify(state.items));
      const currentTotalPrice =
        state.totalPrice - newItems[action.payload].totalPrice;
      const currentTotalCount =
        state.totalCount - newItems[action.payload].pizzas.length;

      delete newItems[action.payload];

      return {
        ...state,
        items: newItems,
        totalPrice: currentTotalPrice,
        totalCount: currentTotalCount,
      };
    }

    case "CLEAR_CART":
      return {
        items: {},
        totalCount: 0,
        totalPrice: 0,
      };

    default:
      return state;
  }
}

export default cartReducer;
