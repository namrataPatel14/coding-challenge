const redux = require('redux');
const createStore = redux.createStore;
// ========= Action ============ //

const BUY_CAKE = 'BUY_CAKE';// type must be string constant

function buyCake(){
    return{
        type: BUY_CAKE, // action must have its type
        info: 'First redux action' // you can add any number of data in object.
    }//its returning object
} // function is action creator


// ========== Reducer ============= //

//(previousState , action ) => newState

const initialState = {
    numOfCakes: 10
} // state must be in one object

const reducer = (state = initialState , action) => {
     switch(action.type){ // it will check type from action
        case BUY_CAKE : return {
            ...state, // first it will copy state object
            numOfCakes : state.numOfCakes - 1 // return one state and remaining state will not be change
        } // reducer will return new state
        default: return state
     }
} // reducer takes arguments as a state and action

// ============= store =============== //

const store = createStore(reducer); //it holds state as a argument 
console.log(store.getState(), 'Initial State'); // access state via getState()
const unsubscribe = store.subscribe(()=>console.log('update state' , store.getState())); //it will registering of listeners
store.dispatch(buyCake()); // return updated state via dispatch
store.dispatch(buyCake()); // return updated state via dispatch
store.dispatch(buyCake()); // return updated state via dispatch
unsubscribe(); //it will unregistering of listeners