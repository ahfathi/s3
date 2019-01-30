import React, {Component} from 'react';
import './assets/css/scorepreview.css';

export default class ScorePrev extends Component {
    render() {
        return (
            <div className={'score-prev'}>
                {/* <div className={'scores-leage'}></div> */}
                <a href={this.props.home_team_page_url}>
                <img className={'team-logo'} src={this.props.home_team_logo} alt={this.props.home_team_name} />
                <span className={'team-name'}>{this.props.home_team_name}</span>
                </a>
                <div className={'team-score'}>{this.props.home_team_score}</div>
                <div className={'match-date-time'}>
                    <div className={'match-date'}>{this.props.match_date}</div>
                    <div className={this.props.isStarted ? 'match-time active': 'match-time'}>{this.props.match_time}</div>
                </div>
                <div className={'team-score'}>{this.props.away_team_score}</div>
                <a href={this.props.away_team_page_url}>
                <img className={'team-logo'} src={this.props.away_team_logo} alt={this.props.away_team_name} />
                <span className={'team-name'}>{this.props.away_team_name}</span>
                </a>
            </div>
        )
    }
}
