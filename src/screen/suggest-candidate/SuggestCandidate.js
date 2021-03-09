import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ProgressBar from '../../component/progress-bar/ProgressBar';
import SuggestCandidates from '../../component/suggest-candidate/SuggestCandidates';
import * as Action from "../../service/action/SuggestCandidate";
import '../../css/SuggestNav.css'

class SuggestCandidate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: ['Business Analysis', 'Back-end Developer', 'Front-end Developer'],
            active: false
        }
    }

    onSelected = (index) => {
        this.props.onPositionSelect(index)
    }

    showPosition = () => {
        var { suggestCandidateList, selectedIndex } = this.props
        var result = null;
        result = suggestCandidateList.map((item, index) => {
            return (
                <li className='li'>
                    <a key={index} className={selectedIndex === index ? 'active' : ''} onClick={() => this.onSelected(index)} >{item.position}</a>
                </li>
            )
        })
        return result
    }

    render() {
        var { suggestCandidateList, selectedIndex } = this.props
        return (
            <div>
                <ProgressBar step="step3" />
                <div class="row">
                    <div className='col-2'>
                        <ul className='ul'>
                            {this.showPosition()}
                        </ul>
                    </div>
                    <div className='col'>
                        <SuggestCandidates item={suggestCandidateList[selectedIndex]} />
                    </div>
                </div>
                <NavLink to="/project">
                    <button type="submit" className="btn btn-primary pull-right pt">Next</button>
                </NavLink>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        suggestCandidateList: state.SuggestCandidateList,
        selectedIndex: state.SuggestCandidateSelect
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onPositionSelect: index => {
            dispatch(Action.setPositionSelect(index))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SuggestCandidate);