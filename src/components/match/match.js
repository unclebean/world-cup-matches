import React, { Component } from 'react';
import moment from 'moment';
import './match.css';

export default class Match extends Component {
    constructor(props) {
        super(props);
        this.state = {match: this.props.match};
    }

    renderGoalEvens(events) {
        return (
            <ul className="match-events">
                {events.map((event, index) => {
                    if(event.type_of_event === 'goal' || event.type_of_event === 'goal-penalty'){
                    return (<li className="match-event" key={index}>
                        <span>{event.time}</span>
                        <span>{event.player}</span>
                    </li>)
                    }
                })}
            </ul>
        );
    }

    renderMatchType() {
        const hostTeamGroup = this.state.match.home_team.group_letter;
        const awayTeamGroup = this.state.match.away_team.group_letter;
        if(hostTeamGroup === awayTeamGroup) {
            return <span>Group {hostTeamGroup}</span>
        } else {
            return <span>Knockout</span>
        }
    }

    render() {
        return (
            <div className="card--match">
                <div className="card-content">
                    <div className="match-date">
                        {this.renderMatchType()}
                        <span>{moment(this.state.match.datetime).format('DD MMM YYYY, h:mm a')}</span>
                    </div>
                    <div className="match">
                        <div className="host-team">
                            <div className="bold-info">{this.state.match.home_team_country} </div>
                            <div className="bold-info">{this.state.match.home_team.goals}</div>
                            <div>{this.renderGoalEvens(this.state.match.home_team_events)}</div>
                        </div>
                        <div className="versus">
                            <div>vs</div>
                            <div>:</div>
                        </div>
                        <div className="away-team">
                            <div className="bold-info">{this.state.match.away_team_country}</div>
                            <div className="bold-info">{this.state.match.away_team.goals}</div>
                            <div>{this.renderGoalEvens(this.state.match.away_team_events)}</div>
                        </div>
                    </div>
                    <div className="match-location">
                        <span>Location</span>
                        <span>{this.state.match.location}</span>
                    </div>
              </div>
            </div>
        );
    }
}