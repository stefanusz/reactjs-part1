var React = require('react');

var ReactDOM = require('react-dom');

var ListManager = require('./components/ListManager.jsx');

ReactDOM.render (<ListManager title="A to do list."></ListManager>, document.getElementById('ingredients'));

ReactDOM.render (<ListManager title="A to do list2."></ListManager>, document.getElementById('ingredients2'));

ReactDOM.render (<ListManager title="A to do list3." headingColor="#b31216"></ListManager>, document.getElementById('ingredients3'));
