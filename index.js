const redux = require("redux")
const reduxLogger = require('redux-logger')

const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()



const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

function buyCake() {
  return {
    type: BUY_CAKE,
    info: 'First redux action'
  }
}

function buyIcecream() {
  return {
    type: BUY_ICECREAM,
  }
}

// (previousState, action) => newState

// const initialState = {
//   numOfCakes: 10,
//   numOfIceCream: 20

// }

const initialCakeState = {
   numOfCakes: 10
}
const initialIceCreamState = {
   numOfIceCreams: 20
}

const cakeReducer= (state = initialCakeState, action) => {
  switch(action.type) {
    case BUY_CAKE: return {
       ...state,
      numOfCakes: state.numOfCakes - 1
    }
    default: return state
  }
}
const iceCreamReducer= (state = initialIceCreamState, action) => {
  switch(action.type) {
    case BUY_ICECREAM: return {
       ...state,
       numOfIceCreams: state.numOfIceCreams - 1
    }
    default: return state
  }
}
// const reducer= (state = initialState, action) => {
//   switch(action.type) {
//     case BUY_CAKE: return {
//        ...state,
//       numOfCakes: state.numOfCakes - 1
//     }
//     case BUY_ICECREAM: return {
//        ...state,
//        numOfIceCream: state.numOfIceCream - 1
//     }
//     default: return state
//   }
// }

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
})


//1. Holds application state
const store = createStore(rootReducer, applyMiddleware(logger))

//2. Allow access to state via getState()
console.log('Initial state', store.getState())

// 3. Allows state to be updated via dispatch(action)



//4. Register listeners via subscribe
const unsubscribe= store.subscribe(()=> {})

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
unsubscribe()

