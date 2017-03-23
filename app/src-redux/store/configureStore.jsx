module.exports = (() => {
    const redux = require('redux'),
          thunk = require('redux-thunk').default;

    let {
        searchFilterReducer,
        showCompletedReducer,
        taskListReducer,
        mapReducer
    } = require('../reducers/reducers.jsx');

    let reducer = redux.combineReducers({
        searchFilter: searchFilterReducer,
        showCompleted: showCompletedReducer,
        taskList: taskListReducer,
        map: mapReducer
    });

    return redux.createStore(reducer, redux.compose(
        redux.applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
})();