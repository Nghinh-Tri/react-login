import React, { Component } from 'react';

class SuggestCandidateItems extends Component {

    onSelect = (event) => {
        this.props.onSelect(event.target.checked)
    }

    render() {
        var { index, candidate } = this.props
        return (
            <tr>
                <th className="text-center">{index}</th>
                <th className="text-center">{candidate.name}</th>
                <th className="text-center">{candidate.matchLang} / 10</th>
                <th className="text-center">{candidate.matchSoftSkill} / 10</th>
                <th className="text-center">{candidate.matchHardSkill} /10 </th>
                <th className="text-center">{candidate.match} / 100</th>
                <th className="text-center">
                    <input type="checkbox" onClick={this.onSelect} />
                </th>
            </tr>
        );
    }
}

export default SuggestCandidateItems;