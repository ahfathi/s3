import React, {Component} from 'react';
import './assets/css/scorepreview.css';
import {Link} from 'react-router-dom';

export default class ScorePrev extends Component {
    render() {
        var data = this.props.data;
        return (
            <div className={'score-prev'}>
                {/* <div className={'scores-leage'}></div> */}
                <Link to={`/teams/${data.home_team_id}`}>
                <img className={'team-logo'} src={data.home_team_logo} alt={data.home_team_name} />
                <span className={'team-name'}>{data.home_team_name}</span>
                </Link>
                <div className={'team-score'}>{data.home_team_goals}</div>
                <Link to={`/games/${data.game_id}`}>
                <div className={'match-date-time'}>
                    <div className={'match-date'}>{data.match_date}</div>
                    <div className={data.is_started ? 'match-time active': 'match-time'}>{data.match_time}</div>
                </div>
                </Link>
                <div className={'team-score'}>{data.away_team_goals}</div>
                <Link to={`/teams/${data.away_team_id}`}>
                <img className={'team-logo'} src={data.away_team_logo} alt={data.away_team_name} />
                <span className={'team-name'}>{data.away_team_name}</span>
                </Link>
            </div>
        )
    }
}
