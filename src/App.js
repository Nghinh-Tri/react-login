import './App.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomePage from './screen/HomePage/HomePage';
import LoginPage from './screen/LoginPage/LoginPage';
import { history } from './service/helper/History';
import { Route, Router } from 'react-router-dom';
import { PrivateRoute } from './component/PrivateRouter';

class App extends Component {

    constructor(props) {
        super(props);
        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            // dispatch(alertActions.clear());
        });
    }

    render() {
        const { alert } = this.props;
        return (
            <div className="jumbotron">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Router history={history}>
                            <div>
                                <PrivateRoute exact path="/" component={HomePage} />
                                <Route path="/login" component={LoginPage} />
                            </div>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        alert: state.alertReducer
    };
}


export default connect(mapStateToProps, null)(App);
