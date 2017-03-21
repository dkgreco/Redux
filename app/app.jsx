const React = require('react'),
    ReactDOM = require('react-dom'),
    {Route, Router, IndexRoute, hashHistory} = require('react-router');

//Load Foundation and Custom CSS
require('style!css!sass!applicationStyles');
$('document').foundation();

ReactDOM.render(
    <p>Learn Redux</p>,
    document.getElementById('app')
);

//require('./redux-example.jsx')
require('./redux-todo-example.jsx');