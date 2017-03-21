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

let store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

//subscribe to changes
store.subscribe(() => {
    "use strict";
    let state = store.getState();
    console.log('Search Text Change: ', state.searchFilter);
    console.log('Show Completed Tasks: ', state.showCompleted);
});

let currentState = store.getState();

console.log('Current State: ', currentState);

//all actions must be objects
let action1 = {
    type: 'SHOW_COMPLETED',
    showCompleted: true
};

let action2 = {
    type: 'SET_FILTER',
    searchFilter: 'Feed Mister'
};

let action3 = {
    type: 'SET_FILTER',
    searchFilter: 'Make Dinner'
};

store.dispatch(action1);
store.dispatch(action2);
store.dispatch(action3);