import { applyMiddleware, legacy_createStore  as createStore} from 'redux' ;
// import { cakeReducer } from './cake/cakeReducer';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';


export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger)));