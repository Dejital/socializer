export const DATA_AVAILABLE = 'DATA_AVAILABLE';

const data = [
    { 'name': 'Serge', 'description': 'That is me!' },
    { 'name': 'Sharmi', 'description': 'That is my wife!' },
    { 'name': 'Misha', 'description': 'That is the Mish-boi!' }
];

export function getData() {
    return (dispatch) => {
        setTimeout(() => {
            dispatch({type: DATA_AVAILABLE, data: data});
        }, 2000)
    };
}