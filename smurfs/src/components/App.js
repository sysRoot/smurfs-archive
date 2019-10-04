import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import SmurfList from "./SmurfList";
import AddForm from "./AddForm";

import { getSmurfs, addSmurf } from "../actions";

class App extends Component {
    componentDidMount() {
        this.getSmurfs();
    }

    getSmurfs = () => {
        this.props.getSmurfs();
    };

    addSmurfs = (e, smurf) => {
        e.preventDefault();
        this.props.addSmurf(smurf);
    };

    render() {
        return (
            <>
                <AddForm adder={this.addSmurfs} />
                <SmurfList smurfs={this.props.smurfs} />
            </>
        );
    }
}

const mapStateToProps = state => ({
    smurfs: state.smurfs,
    error: state.error
});

export default connect(
    mapStateToProps,
    { getSmurfs, addSmurf }
)(App);
