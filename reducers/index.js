import { combineReducers } from 'redux';
import { DATA_AVAILABLE, CONTACT_AVAILABLE } from '../actions/';

let dataState = { data: [], loading: true };

const dataReducer = (state = dataState, action) => {
  switch (action.type) {
    case DATA_AVAILABLE:
      state = Object.assign({}, state, { data: action.data, loading: false });
      return state;
    default:
      return state;
  }
};

let contactState = { data: {}, loading: true };

const contactReducer = (state = contactState, action) => {
  switch (action.type) {
    case CONTACT_AVAILABLE:
      state = Object.assign({}, state, { data: action.data, loading: false });
      return state;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  dataReducer,
  contactReducer
})

export default rootReducer;
