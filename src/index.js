import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk'
import './index.css';
import App from './containers/App'
import * as serviceWorker from './serviceWorker';
import { searchRobots, requestRobots } from './reducers.js'

// using redux-devtools
const composeEnhancers = 	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// store uses reducers to createStore()
const rootReducer = combineReducers({ searchRobots, requestRobots })
const store = createStore(
	rootReducer,
	composeEnhancers(
		applyMiddleware(thunkMiddleware)
	)
)

ReactDOM.render(
	// Provider passes down the store to the components
	<Provider store={store}>
		<App/>
	</Provider>, 
	document.getElementById('root'));
serviceWorker.unregister();
