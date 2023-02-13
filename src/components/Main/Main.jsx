import './main.css'
import Card from '../../../Card/Card'
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import setPizzas from '../../../../redux/actions/pizza'
import store from '../../../../redux/store';


function Main() {


    const items = useSelector(state => state.pizzas.items)

    return (
        <div className="main">
            <h2 className='main__title'>Все пиццы</h2>
            <div className="main__container">
                {
                    items.map(pizza => <Card key={pizza.id} {...pizza}/> )
                }
            </div>
        </div>
    );
}

export default Main;