import React, { Component } from 'react';
import Match from '../components/match/match';

export default class TodayMatches extends Component {
    constructor(props) {
        super(props);
        this.state = { matches:[] };
    }

    async componentDidMount() {
        const teams = await fetch("https://worldcup.sfg.io/teams/").then(response => response.json());
        const matches = await fetch("https://worldcup.sfg.io/matches/today").then(response => response.json())
        .then(matches => matches.map((match) => {
            match.home_team.group_letter = teams.find(team => team.country === match.home_team.country).group_letter;
            match.away_team.group_letter = teams.find(team => team.country === match.away_team.country).group_letter;
            return match;
        }));
        this.setState({ matches: matches});
    }

    render() {
        return (
            <ul className="match-list">
            {this.state.matches.map((match, index) => {
               return (
                    <li className="card card-in-list" key={index}>
                        <Match match={match}/>
                    </li>
               );
            })}
            </ul>
        );
    }
}