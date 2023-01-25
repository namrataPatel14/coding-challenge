const redux = require('redux');
const reduxLogger = require('redux-logger');

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger();
// ========= Action ============ //

const BUY_CAKE = 'BUY_CAKE';// type must be string constant
const BUY_ICECREAM = 'BUY_ICECREAM';

function buyCake(){
    return{
        type: BUY_CAKE, // action must have its type
        info: 'First redux action' // you can add any number of data in object.
    }//its returning object
} // function is action creator

function buyIcecream(){
    return{
        type: BUY_ICECREAM, // action must have its type
    }//its returning object
} // function is action creator


// ========== Reducer ============= //

//(previousState , action ) => newState

const initialStateCake = {
    numOfCakes: 10
} // state must be in one object

const initialStateIcecream = {
    numOfIcecream: 20
} // state must be in one object

const reducerCake = (state = initialStateCake , action) => {
     switch(action.type){ // it will check type from action
        case BUY_CAKE : return {
            ...state, // first it will copy state object
            numOfCakes : state.numOfCakes - 1 // return one state and remaining state will not be change
        } // reducer will return new state
        default: return state
     }
} // reducer takes arguments as a state and action

const reducerIcecream = (state = initialStateIcecream , action) => {
    switch(action.type){ // it will check type from action
       case BUY_ICECREAM : return {
           ...state, // first it will copy state object
           numOfIcecream : state.numOfIcecream - 1 // return one state and remaining state will not be change
       } // reducer will return new state
       default: return state
    }
} // reducer takes arguments as a state and action
const rootReducer = combineReducers ({
    cake:reducerCake,
    iceCream:reducerIcecream
})
// ============= store =============== //
const store = createStore(rootReducer, applyMiddleware(logger)); //it holds state as a argument 
console.log(store.getState(), 'Initial State'); // access state via getState()
const unsubscribe = store.subscribe(()=>{}); //it will registering of listeners
store.dispatch(buyCake()); // return updated state via dispatch
store.dispatch(buyCake()); // return updated state via dispatch
store.dispatch(buyCake()); // return updated state via dispatch
store.dispatch(buyIcecream()); // return updated state via dispatch
store.dispatch(buyIcecream()); // return updated state via dispatch
unsubscribe(); //it will unregistering of listeners