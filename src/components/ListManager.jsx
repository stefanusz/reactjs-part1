var React = require('react');
var List = require('./List.jsx');

var ListManager = React.createClass({

  getInitialState: function() {
    return {items: [], newItemText: ''};
  },

  onChange: function(e) {
    this.setState({newItemText: e.target.value});
  },

  handleSubmit: function(e) {
    // stop the button from getting clicks since we are using form onSubmit
    e.preventDefault();

    // grab the current list of items
    var currentItems = this.state.items;

    // add thew new item to the list
    currentItems.push(this.state.newItemText);

    // update the main item list with the new list & clear thew newItemText
    this.setState({items: currentItems, newItemText: ''});
  },

  render: function() {

    var divStyle = {
      marginTop: 50
    };

    var headingStyle = {

    }

    if(this.props.headingColor){
      headingStyle.color = this.props.headingColor;
    }


    //onChange is called with every keystroke so we can store the most recent data entered
    // value is what the user sees in the input box - we point this to newItemText so it updates on every typed
    return (

      <div style={divStyle} className="col-sm-4">
        <div className="panel panel-primary">
          <div style={headingStyle} className="panel-heading">
            <h3>{this.props.title}</h3>
          </div>
          <div className="row panel-body">
            <form onSubmit={this.handleSubmit}>
              <div className="col-sm-8">
                <input className="form-control" onChange={this.onChange} value={this.state.newItemText}></input>
              </div>

              <div className="col-sm-4">
                <button className="btn btn-primary">Add</button>
              </div>

            </form>

            <List items={this.state.items}></List>
          </div>

        </div>

      </div>
    );
  }

});

module.exports = ListManager;
