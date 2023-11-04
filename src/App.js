import React, { Component } from 'react';
import AppBar from './components/AppBar';
import Router from './Router';
import { authOperations } from './redux/auth';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.onGetToken();
  }
  render() {
    return (
      <>
        <AppBar />
        <Router />
      </>
    );
  }
}

const mapDispatchToProps = {
  onGetToken: authOperations.getToken,
};

export default connect(null, mapDispatchToProps)(App);
