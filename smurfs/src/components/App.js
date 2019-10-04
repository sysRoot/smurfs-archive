import React, { Component } from "react";
import { connect } from 'react-redux';
import "./App.css";
import SmurfList from "./SmurfList";

import { getSmurfs } from '../actions'



class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.getSmurfs();
  }

  getSmurfs = () => {
    this.props.getSmurfs();
  }

  render() {
    return (
      <SmurfList smurfs={this.props.smurfs}/>
    );
  }
}

const mapStateToProps = state =>({
  smurfs: state.smurfs,
  error: state.error
})
export default connect(mapStateToProps, { getSmurfs })(App);
