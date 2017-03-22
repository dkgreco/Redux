const redux = require('redux');
console.log('Starting Redux');

let testActionList = () => {
    "use strict";

};

let dispatch = action => {
    "use strict";
    return store.dispatch(action);
};

//SearchFilter Reducer and Action Generators
//---------------
let searchFilterReducer = (state, action) => {
    "use strict";
    state = state || 'Anonymous';
    switch(action.type) {
        case 'SET_FILTER':
            return action.searchFilter;
        default:
            return state;
    }
};

let dispatchChangeToSearchFilter = searchFilter => {
    "use strict";
    return {
        type: 'SET_FILTER',
        searchFilter: searchFilter
    }
};

let setSearchFilterTo = searchFilter => dispatch(dispatchChangeToSearchFilter(searchFilter));

//Show all completed tasks Reducer and Action Generators
//---------------
let showCompletedReducer = (state, action) => {
    "use strict";
    state = state || false;
    switch(action.type) {
        case 'SHOW_COMPLETED':
            return action.showCompleted;
        default:
            return state;
    }
};

let dispatchChangeToShowCompletedTasks = boolVal => {
    "use strict";
    return {
        type: 'SHOW_COMPLETED',
        showCompleted: boolVal
    }
};

let showCompletedTasks = boolVal => dispatch(dispatchChangeToShowCompletedTasks(boolVal));

//taskList Reducer and Action Generators
//---------------
let nextTaskId = 1;
let taskListReducer = (state, action) => {
    "use strict";
    state = state || [];
    switch(action.type) {
        case 'ADD_TASK':
            return [
                ...state,
                {
                    id: nextTaskId++,
                    task: action.task
                }
            ];
        case 'DEL_TASK':
            return state.filter(task => task.id !== action.id);
        default:
            return state;
    }
};

let dispatchAdditionToTaskList = task => {
    "use strict";
    return {
        type: 'ADD_TASK',
        task: task
    }
};

let addTaskToList = task => dispatch(dispatchAdditionToTaskList(task));

let dispatchSubtractionFromTaskList = taskId => {
    "use strict";
    return {
        type: 'DEL_TASK',
        id: taskId
    }
};

let removeTaskFromList = taskId => dispatch(dispatchSubtractionFromTaskList(taskId));

let reducer = redux.combineReducers({
    searchFilter: searchFilterReducer,
    showCompleted: showCompletedReducer,
    taskList: taskListReducer
});

let store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

//subscribe to changes
store.subscribe(() => {
    "use strict";
    let state = store.getState();
    console.log('State Change: ', state);
});

//all actions must be objects
setSearchFilterTo('Mister');
showCompletedTasks(true);
addTaskToList('Feed Mister');
addTaskToList('Walk Bailey');
removeTaskFromList(1);