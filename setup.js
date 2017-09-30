import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Home from './components/Home';

function setup() {
    class Root extends React.Component {
        render() {
            return (
                <Provider store={store}>
                    <Home />
                </Provider>
            );
        }
    }
    
    return Root;
}

module.exports = setup;