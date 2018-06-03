import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import PokemonList from './PokemonList';
import PokemonDetail from './PokemonDetail';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
<Provider store={store}>	
	<Router>
		<App>
			<Route exact path="/" component={PokemonList} />
			<Route path="/detail/:name" component={PokemonDetail} />
		</App>
	</Router>	
</Provider>, document.getElementById('root'));
registerServiceWorker();
