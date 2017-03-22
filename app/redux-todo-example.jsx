const redux = require('redux'),
    axios = require('axios');
console.log('Starting Redux');

let setDispatchTo = actionGenerator => {
    "use strict";
    return store.dispatch(actionGenerator);
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

let changeSearchFilter = searchFilter => {
    "use strict";
    return {
        type: 'SET_FILTER',
        searchFilter: searchFilter
    }
};

let setSearchFilterTo = searchFilter => setDispatchTo(changeSearchFilter(searchFilter));

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

let showCompletedTasks = boolVal => {
    "use strict";
    return {
        type: 'SHOW_COMPLETED',
        showCompleted: boolVal
    }
};

let viewCompletedTasks = boolVal => setDispatchTo(showCompletedTasks(boolVal));

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

let addTaskToList = task => {
    "use strict";
    return {
        type: 'ADD_TASK',
        task: task
    }
};

let addTask = task => setDispatchTo(addTaskToList(task));

let removeTaskFromList = taskId => {
    "use strict";
    return {
        type: 'DEL_TASK',
        id: taskId
    }
};

let deleteTask = byTaskId => setDispatchTo(removeTaskFromList(byTaskId));

//SearchFilter Reducer and Action Generators
//---------------
let mapReducer = (state, action) => {
    "use strict";
    let defaultState = {
        isFetching: false,
        url: undefined
    };
    state = state || defaultState;
    switch(action.type) {
        case 'START_LOCATION_SEARCH':
            return {
                isFetching: true,
                url: undefined
            };
        case 'STOP_LOCATION_SEARCH':
            return {
                isFetching: false,
                url: action.url
            };
        default:
            return state;
    }
};

let startLocationSearch = () => {
    "use strict";
    return {
        type: 'START_LOCATION_SEARCH'
    }
};

let completeLocationSearch = url => {
    "use strict";
    return {
        type: 'STOP_LOCATION_SEARCH',
        url: url
    }
};

let fetchLocationInfo = () => {
    setDispatchTo(startLocationSearch());

    axios.get('http://ipinfo.io').then(res => {
        "use strict";
        let location = res.data.loc;
        let baseUrl = 'http://maps.google.com/?q=';

        let passbackUrl = baseUrl + location;

        setDispatchTo(completeLocationSearch(passbackUrl));
    });
};

let reducer = redux.combineReducers({
    searchFilter: searchFilterReducer,
    showCompleted: showCompletedReducer,
    taskList: taskListReducer,
    map: mapReducer
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
fetchLocationInfo();
setSearchFilterTo('Mister');
viewCompletedTasks(true);
addTask('Feed Mister');
addTask('Walk Bailey');
deleteTask(1);