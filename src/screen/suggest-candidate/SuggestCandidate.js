import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ProgressBar from '../../component/progress-bar/ProgressBar';
import SuggestCandidates from '../../component/suggest-candidate/SuggestCandidates';

class SuggestCandidate extends Component {
    render() {
        return (
            <div>
                <ProgressBar step="step3" />
                <SuggestCandidates />
                <SuggestCandidates />
                <NavLink to="/project">
                    <button type="submit" className="btn btn-primary pull-right pt">Next</button>
                </NavLink>               
            </div>
        );
    }
}

export default SuggestCandidate;