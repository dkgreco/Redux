const redux = require('redux');
console.log('Starting Redux');

let reducer = (state, action) => {
    "use strict";
    state = state || {showCompleted: false, searchFilter: '', taskList:[]};

    return state;
};

let store = redux.createStore(reducer);
let currentState = store.getState();

console.log('Current State: ', currentState);