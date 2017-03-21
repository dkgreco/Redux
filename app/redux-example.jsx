const redux = require('redux');
console.log('starting redux example');


let reducer = (state, action) => {
    "use strict";
    state = state || {name: 'Anonymous'};

    return state;
};
let store =  redux.createStore(reducer);

let currentState = store.getState();
console.log('Current State:', currentState);