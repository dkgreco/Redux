const React = require('react'),
    ReactDOM = require('react-dom'),
    {Route, Router, IndexRoute, hashHistory} = require('react-router');

//Load Foundation and Custom CSS
require('style!css!sass!applicationStyles');
$('document').foundation();

/*ReactDOM.render(
    <p>Learn Redux</p>,
    document.getElementById('app')
);*/

//require('./redux-example.jsx');

let store = require('./src-redux/store/configureStore.jsx').configure();
console.log(store);
store.subscribe(() => {
    "use strict";
    console.log('NewState: ', store.getState());
});

let {
    setSearchFilterTo,
    viewCompletedTasks,
    addTask,
    removeTask,
    fetchLocation
} = require('./redux-todo-example.jsx');

let controller = {
    setSearchFilterTo,
    viewCompletedTasks,
    addTask,
    removeTask,
    fetchLocation
};

window.controller = controller;
