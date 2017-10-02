import { combineReducers } from 'redux';
import { DATA_AVAILABLE, CONTACT_AVAILABLE, ADD_CONTACT, UPDATE_CONTACT } from '../actions/';

let dataState = { data: [], loading: true };

const dataReducer = (state = dataState, action) => {
  switch (action.type) {
    case DATA_AVAILABLE:
      state = Object.assign({}, state, { data: action.data, loading: false });
      return state;

    case ADD_CONTACT:
      var data = cloneObject(state.data);
      data.unshift(action.contact);
      state = Object.assign({}, state, { data: data });
      return state;

    case UPDATE_CONTACT:
      let contact = action.contact;
      var data = cloneObject(state.data);
      let index = getIndex(data, contact.id);
      if (index !== -1) {
        data[index]['name'] = contact.name;
        data[index]['description'] = contact.description;
      }
      state = Object.assign({}, state, { data: data })
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

function cloneObject(object) {
  return JSON.parse(JSON.stringify(object));
}

function getIndex(data, id) {
  let clone = cloneObject(data);
  return clone.findIndex((obj) => parseInt(obj.id) === parseInt(id));
}

const rootReducer = combineReducers({
  dataReducer,
  contactReducer
})

export default rootReducer;
