import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from '../component/navigation/Navigation';
import RouteList from '../RouterMap'

class Layout extends Component {

    showContent = (RouteList) => {
        var result = null;
        if (RouteList.length > 0) {
            result = RouteList.map((route, index) => {
                return (
                    <Route key={index} path={route.path} exact={route.exact} component={route.main} />
                )
            });
        }
        return <Switch> {result} </Switch>
    }
    render() {
        return (
            <div className="wrapper ">
                {/* {this.renderLogin()} */}
                <Navigation />
                <div className="main-panel">
                    <div className="content">
                        {this.showContent(RouteList)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Layout;