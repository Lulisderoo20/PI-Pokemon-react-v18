// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
// import rootReducer from '../reducer/index';

// export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
//ESTO DE ABAJO ES LO QUE ME DIO GUIDI




import { applyMiddleware, legacy_createStore as createStore, compose } from "redux";
import thunk from "redux-thunk"; //para hacer tareas asincronicas
import reducer from "../reducer/index";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store;