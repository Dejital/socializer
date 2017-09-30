export const DATA_AVAILABLE = 'DATA_AVAILABLE';

const data = [
  { 'name': 'Serge', 'description': 'That is me!', 'touched': '', 'oneOnOned': '' },
  { 'name': 'Sharmi', 'description': 'That is my wife!', 'touched': '2017-08-09 13:37:38', 'oneOnOned': '2017-08-09 13:37:38' },
  { 'name': 'Misha', 'description': 'That is the Mish-boi!', 'touched': '', 'oneOnOned': '' }
];

export function getData() {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({type: DATA_AVAILABLE, data: data});
    }, 2000)
  };
}
