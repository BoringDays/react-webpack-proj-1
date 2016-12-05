// import { Link, IndexLink } from 'react-router';
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import '../../public/stylesheets/common.scss';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <h1>React App</h1>
          <Toolbar>
            <ToolbarGroup>
              <FlatButton label="index" href="#/" />
              <FlatButton label="products" href="#/product" />
            </ToolbarGroup>
          </Toolbar>
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.object
};

export default App;
