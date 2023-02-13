import Filter from "./Filter/Filter";
import SortPopup from "../../SortPopup/SortPopup";
import { setCategory } from "../../../redux/actions/filter";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPizzas } from "../../../redux/actions/pizza";
import { setLoading } from "../../../redux/actions/pizza";
import { setFilter } from "../../../redux/actions/filter";
import { setAddPizzaToCart } from "../../../redux/actions/cart";
import Card from "./Card/Card";
import LoadedPizzaCard from "./Card/LoadedPizzaCard/LoadedPizzaCard";

function Home() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.pizzas.items);
  const { category, sortBy } = useSelector((state) => state.filter);
  const { isLoaded } = useSelector((state) => state.pizzas);
  const countItems = useSelector((state) => state.cart.items);

  
  useEffect(() => {
    dispatch(setLoading(false));
    axios
      .get(
        `http://localhost:3000/pizzas?${
          category !== null ? `category=${category}` : ""
        }&_sort=${sortBy.type}&_order=${sortBy.order}`
      )
      .then(({ data }) => {
        dispatch(setPizzas(data));
      });
  }, [category, sortBy]);

  const onSelectItem = (index) => {
    dispatch(setCategory(index));
  };

  const setChoiceItemPopup = (val) => {
    dispatch(setFilter(val));
  };

  const onAddPizza = (obj) => {
    dispatch(setAddPizzaToCart(obj));
  };

  return (
    <>
      <div className="filter">
        <Filter
          items={["Мясные", "Вегетарианские", "Гриль", "Острые", "Закрытые"]}
          onSelectItem={onSelectItem}
          category={category}
        />
        <SortPopup
          items={[
            { name: "популярности", type: "rating", order: "desc" },
            { name: "цене", type: "price", order: "desc" },
            { name: "алфавиту", type: "name", order: "asc" },
          ]}
          setChoiceItemPopup={setChoiceItemPopup}
        />
      </div>
      <div className="main">
        <h2 className="main__title">Все пиццы</h2>
        <div className="main__container">
          {isLoaded
            ? items.map((pizza) => (
                <Card
                  onAddPizza={onAddPizza}
                  key={pizza.id}
                  countItems={
                    countItems[pizza.id] && countItems[pizza.id].pizzas.length
                  }
                  {...pizza}
                />
              ))
            : Array(9)
                .fill(0)
                .map((_, idx) => <LoadedPizzaCard key={idx} />)}
        </div>
      </div>
    </>
  );
}

export default Home;
