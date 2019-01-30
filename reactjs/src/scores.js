import React, {Component} from 'react';
import './assets/css/scores.css'
import ScorePrev from './scorepreview';
import GroupButton from './groupbutton';
import Calendar from 'react-calendar';

export default class Scores extends Component {
    constructor(props) {
        super(props);
        this.state = {options_active: false};
        this.toggle_options = this.toggle_options.bind(this);
    }

    toggle_options() {
        this.setState((state) => ({options_active: !state.options_active}));
    }
    
    render() {
        return (
            <div className={'scores-container'}>
                <div className={'score-previews-container'}>
                    <ScorePrev home_team_name={'منچستر یونایتد'} home_team_logo={'/static/media/manchester-united.b224c560.png'} home_team_page_url={'#'} away_team_name={'اینتر'} away_team_logo={'https://a.espncdn.com/i/teamlogos/soccer/500/110.png'} away_team_page_url={'#'} home_team_score={'۲'} away_team_score={'۳'} isStarted={false} match_date={'۹/۲۴'} match_time={'۲۳:۳۰'} game_page_url={'#'} />
                    <ScorePrev home_team_name={'منچستر یونایتد'} home_team_logo={'/static/media/manchester-united.b224c560.png'} home_team_page_url={'#'} away_team_name={'اینتر'} away_team_logo={'https://a.espncdn.com/i/teamlogos/soccer/500/110.png'} away_team_page_url={'#'} home_team_score={'۲'} away_team_score={'۳'} isStarted={false} match_date={'۹/۲۴'} match_time={'۲۳:۳۰'} game_page_url={'#'} />
                    <ScorePrev home_team_name={'منچستر یونایتد'} home_team_logo={'/static/media/manchester-united.b224c560.png'} home_team_page_url={'#'} away_team_name={'اینتر'} away_team_logo={'https://a.espncdn.com/i/teamlogos/soccer/500/110.png'} away_team_page_url={'#'} home_team_score={'۲'} away_team_score={'۳'} isStarted={false} match_date={'۹/۲۴'} match_time={'۲۳:۳۰'} game_page_url={'#'} />
                    <ScorePrev home_team_name={'منچستر یونایتد'} home_team_logo={'/static/media/manchester-united.b224c560.png'} home_team_page_url={'#'} away_team_name={'اینتر'} away_team_logo={'https://a.espncdn.com/i/teamlogos/soccer/500/110.png'} away_team_page_url={'#'} home_team_score={'۲'} away_team_score={'۳'} isStarted={false} match_date={'۹/۲۴'} match_time={'۲۳:۳۰'} game_page_url={'#'} />
                    <ScorePrev home_team_name={'منچستر یونایتد'} home_team_logo={'/static/media/manchester-united.b224c560.png'} home_team_page_url={'#'} away_team_name={'اینتر'} away_team_logo={'https://a.espncdn.com/i/teamlogos/soccer/500/110.png'} away_team_page_url={'#'} home_team_score={'۲'} away_team_score={'۳'} isStarted={false} match_date={'۹/۲۴'} match_time={'۲۳:۳۰'} game_page_url={'#'} />
                    <ScorePrev home_team_name={'منچستر یونایتد'} home_team_logo={'/static/media/manchester-united.b224c560.png'} home_team_page_url={'#'} away_team_name={'اینتر'} away_team_logo={'https://a.espncdn.com/i/teamlogos/soccer/500/110.png'} away_team_page_url={'#'} home_team_score={'۲'} away_team_score={'۳'} isStarted={false} match_date={'۹/۲۴'} match_time={'۲۳:۳۰'} game_page_url={'#'} />
                    <ScorePrev home_team_name={'منچستر یونایتد'} home_team_logo={'/static/media/manchester-united.b224c560.png'} home_team_page_url={'#'} away_team_name={'اینتر'} away_team_logo={'https://a.espncdn.com/i/teamlogos/soccer/500/110.png'} away_team_page_url={'#'} home_team_score={'۲'} away_team_score={'۳'} isStarted={false} match_date={'۹/۲۴'} match_time={'۲۳:۳۰'} game_page_url={'#'} />
                    <ScorePrev home_team_name={'منچستر یونایتد'} home_team_logo={'/static/media/manchester-united.b224c560.png'} home_team_page_url={'#'} away_team_name={'اینتر'} away_team_logo={'https://a.espncdn.com/i/teamlogos/soccer/500/110.png'} away_team_page_url={'#'} home_team_score={'۲'} away_team_score={'۳'} isStarted={false} match_date={'۹/۲۴'} match_time={'۲۳:۳۰'} game_page_url={'#'} />
                    <ScorePrev home_team_name={'منچستر یونایتد'} home_team_logo={'/static/media/manchester-united.b224c560.png'} home_team_page_url={'#'} away_team_name={'اینتر'} away_team_logo={'https://a.espncdn.com/i/teamlogos/soccer/500/110.png'} away_team_page_url={'#'} home_team_score={'۲'} away_team_score={'۳'} isStarted={false} match_date={'۹/۲۴'} match_time={'۲۳:۳۰'} game_page_url={'#'} />
                    
                </div>
                <div className={'options-button'} onClick={this.toggle_options}><i class="fas fa-sliders-h"></i></div>
                <div className={'scores-options' + (this.state.options_active ? ' active': '')}>
                    <GroupButton className={'active'} type={'radio'} items={[{text: 'همه بازی ها'}, {text: 'مورد علاقه ها'}]} color={'red'} />
                    <Calendar className={'scores-calendar'} />
                </div>
            </div>
        )
    }
}