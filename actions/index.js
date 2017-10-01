export const DATA_AVAILABLE = 'DATA_AVAILABLE';
export const CONTACT_AVAILABLE = 'CONTACT_AVAILABLE';

const data = [
  { 'name': 'Serge', 'description': 'That is me!', 'touched': '', 'oneOnOned': '' },
  { 'name': 'Sharmi', 'description': 'That is my wife!', 'touched': '2017-08-09 13:37:38', 'oneOnOned': '2017-08-09 13:37:38' },
  { 'name': 'Misha', 'description': 'That is the Mish-boi! He is the man, and he is super cool and this is a super long description.', 'touched': '', 'oneOnOned': '' }
];

export function getData() {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({type: DATA_AVAILABLE, data: data});
    }, 2000)
  };
}

export function getContact(name) {
  return (dispatch) => {
    setTimeout(() => {
      let contact = {};
      for (let i = 0; i < data.length; i++) {
        if (data[i].name === name) {
          contact = data[i];
          break;
        }
      }
      dispatch({type: CONTACT_AVAILABLE, data: contact});
    }, 2000)
  };
}
