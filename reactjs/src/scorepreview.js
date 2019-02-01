import React, {Component} from 'react';
import './assets/css/scorepreview.css';

export default class ScorePrev extends Component {
    render() {
        var data = this.props.data;
        return (
            <div className={'score-prev'}>
                {/* <div className={'scores-leage'}></div> */}
                <a href={data.home_team_page_url}>
                <img className={'team-logo'} src={data.home_team_logo} alt={data.home_team_name} />
                <span className={'team-name'}>{data.home_team_name}</span>
                </a>
                <div className={'team-score'}>{data.home_team_goals}</div>
                <div className={'match-date-time'}>
                    <div className={'match-date'}>{data.match_date}</div>
                    <div className={data.is_started ? 'match-time active': 'match-time'}>{data.match_time}</div>
                </div>
                <div className={'team-score'}>{data.away_team_goals}</div>
                <a href={data.away_team_page_url}>
                <img className={'team-logo'} src={data.away_team_logo} alt={data.away_team_name} />
                <span className={'team-name'}>{data.away_team_name}</span>
                </a>
            </div>
        )
    }
}
