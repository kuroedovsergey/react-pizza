import './App.css';
import Header from './components/pages/HomePage/header/Header'
import Home from './components/pages/HomePage/Home';
import Cart from './components/pages/CartPage/Cart';
import { BrowserRouter as Router, Route,  } from "react-router-dom";


function App() {
	return (
		<Router>
			<div className="App container">
				<Header />
				<Route path='/' component={Home} exact/>
				<Route path='/cart' component={Cart} exact/>
			</div>
		</Router >
	);
}

export default App;
