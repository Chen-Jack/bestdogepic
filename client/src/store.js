import { createStore, combineReducers } from 'redux'

const initialState = {
  isUploading: false
}

function uploadReducer (state = initialState, action) {
  switch (action.type) {
    case 'START_UPLOAD':
      return Object.assign({}, state, { isUploading: true })
    case 'STOP_UPLOAD':
      return Object.assign({}, state, { isUploading: false })
    default:
      return state
  }
};

function accountReducer (state = {
  loggedIn: false
}, action) {
  switch (action.type) {
    case 'LOGIN':
      return Object.assign({}, state, { loggedIn: true })
    case 'LOGOUT':
      return Object.assign({}, state, { loggedIn: false })
    default:
      return state
  }
}
const rootReducers = combineReducers({
  upload: uploadReducer,
  account: accountReducer
})

const store = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
