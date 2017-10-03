import { AsyncStorage } from 'react-native';

export const DATA_AVAILABLE = 'DATA_AVAILABLE';
export const ADD_CONTACT = 'ADD_CONTACT';
export const UPDATE_CONTACT = 'UPDATE_CONTACT';
export const CONTACT_AVAILABLE = 'CONTACT_AVAILABLE';

export function getData() {
  return (dispatch) => {
    setTimeout(() => {
      AsyncStorage.getItem('data', (err, contacts) => {
        if (contacts !== null) {
          dispatch({ type: DATA_AVAILABLE, data: JSON.parse(contacts) });
        }
      });
    });
  };
}

export function getContact(id) {
  return (dispatch) => {
    setTimeout(() => {
      AsyncStorage.getItem('data', (err, contacts) => {
        if (contacts !== null) {
          contacts = JSON.parse(contacts);
          let index = getIndex(contacts, id);
          if (index !== -1) {
            dispatch({ type: CONTACT_AVAILABLE, data: contacts[index] })
          }
        }
      });
    });
  };
}

export function addContact(contact) {
  return (dispatch) => {
    setTimeout(() => {
      AsyncStorage.getItem('data', (err, contacts) => {
        if (contacts !== null) {
          contacts = JSON.parse(contacts);
          contacts.unshift(contact);
          AsyncStorage.setItem('data', JSON.stringify(contacts), () => {
            dispatch({ type: ADD_CONTACT, contact: contact })
          });
        }
      });
    });
  };
}

export function updateContact(contact) {
  return (dispatch) => {
    setTimeout(() => {
      AsyncStorage.getItem('data', (err, contacts) => {
        if (contacts !== null) {
          contacts = JSON.parse(contacts);
          let index = getIndex(contacts, contact.id);
          if (index !== -1) {
            contacts[index]['name'] = contact.name;
            contacts[index]['description'] = contact.description;
            contacts[index]['touched'] = contact.touched;
            contacts[index]['oneOnOned'] = contact.oneOnOned;
          }
          AsyncStorage.setItem('data', JSON.stringify(contacts), () => {
            dispatch({ type: UPDATE_CONTACT, contact: contact });
          });
        }
      });
    });
  };
}

function cloneObject(object) {
  return JSON.parse(JSON.stringify(object));
}

function getIndex(data, id) {
  let clone = cloneObject(data);
  return clone.findIndex((obj) => parseInt(obj.id) === parseInt(id));
}
