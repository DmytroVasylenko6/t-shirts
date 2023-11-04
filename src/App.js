import React, { Component } from 'react';
import AppBar from './components/AppBar';
import Router from './Router';
import Footer from './components/Footer';
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
        <Footer />
      </>
    );
  }
}

const mapDispatchToProps = {
  onGetToken: authOperations.getToken,
};

export default connect(null, mapDispatchToProps)(App);
