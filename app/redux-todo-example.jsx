module.exports = (() => {
    const redux = require('redux');
    console.log('Starting Redux');

    let setDispatchTo = (actionGenerator) => {
        "use strict";
        return store.dispatch(actionGenerator);
    };

    let actionRepository = require('./src-redux/actionGenerators/actionGenerators.jsx'),
        {changeSearchFilter, showCompletedTasks, addTaskToList, removeTaskFromList, fetchLocationInfo} = actionRepository,
        store = require('./src-redux/store/configureStore.jsx');

//subscribe to changes
    store.subscribe(() => {
        "use strict";
        let state = store.getState();
        console.log('State Change: ', state);
    });

    let setSearchFilterTo = searchFilter => setDispatchTo(changeSearchFilter(searchFilter)),
        viewCompletedTasks = boolVal => setDispatchTo(showCompletedTasks(boolVal)),
        addTask = task => setDispatchTo(addTaskToList(task)),
        removeTask = byTaskId => setDispatchTo(removeTaskFromList(byTaskId)),
        fetchLocation = () => setDispatchTo(fetchLocationInfo());

    return {
        setSearchFilterTo,
        viewCompletedTasks,
        addTask,
        removeTask,
        fetchLocation
    };
})();