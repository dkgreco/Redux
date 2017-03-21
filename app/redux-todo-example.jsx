const redux = require('redux');
console.log('Starting Redux');

let defaultState = {
    showCompleted: false,
    searchFilter: '',
    taskList:[]
};

let reducer = (state, action) => {
    "use strict";
    state = state || defaultState;
    switch(action.type) {
        case 'SET_FILTER':
            return {
                ...state,
                searchFilter: action.searchFilter
            };
        case 'SHOW_COMPLETED':
            return {
                ...state,
                showCompleted: action.showCompleted
            };
        default:
            return state;
    }
};

let store = redux.createStore(reducer);
let currentState = store.getState();

console.log('Current State: ', currentState);

//all actions must be objects
let action = {
    type: 'SHOW_COMPLETED',
    showCompleted: true
};

let action2 = {
    type: 'SET_FILTER',
    searchFilter: 'Feed Mister'
};

store.dispatch(action2);
let updatedState = store.getState();
console.log('updated state: ', updatedState);
console.log('default state: ', defaultState);