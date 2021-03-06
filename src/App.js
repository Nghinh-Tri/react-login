import './App.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginPage from './screen/LoginPage/LoginPage';
import { history } from './service/helper/History';
import { Route, Router } from 'react-router-dom';
import { PrivateRoute } from './service/PrivateRouter';
import Layout from './layout/Layout';
import RouteList from './RouterMap'

class App extends Component {

    showPrivateRoute = (RouteList) => {
        var result = null
        if (RouteList.length > 0) {
            result = RouteList.map((route, index) => {
                return (
                    <PrivateRoute key={index} exact path={route.path} component={Layout} />
                )
            });
        }
        return result
    }

    render() {
        return (
            <React.Fragment>
                <Router history={history}>
                    <div>
                        {this.showPrivateRoute(RouteList)}
                        <Route path="/login" component={LoginPage} />
                    </div>
                </Router>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        alert: state.alertReducer
    };
}


export default connect(mapStateToProps, null)(App);
