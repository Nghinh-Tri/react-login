import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from "../../service/action/LoginAction";

class HomePage extends React.Component {

    logout = () => {
        this.props.dispatch(logout())
    }
    render() {
        var { user } = this.props;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Hi {user.user}!</h1>
                <p>You're logged in with React & JWT!!</p>
                <h3>Users from secure api end point:</h3>
                <p>
                    <Link to="/login" onClick={this.logout}>Logout</Link>
                </p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.authentication,
    };
}

export default connect(mapStateToProps, null)(HomePage);