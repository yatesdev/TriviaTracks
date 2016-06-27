import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <MuiThemeProvider>
        <div className="page-container">
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}
