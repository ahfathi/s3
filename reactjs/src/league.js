import React, {Component} from 'react';

import './assets/css/league.css'
import './leagueRanking.js'
import LeagueRanking from './leagueRanking.js';

class League extends Component {
    render() {
        return (
            <div>
                <div className="leagueContainer">
                    <div className="leagueName">
                        لیگ برتر انگلیس (جزیره) فصل 19 - 2018
                    </div>
                    <div className="leagueFixture">
                        <div className="firstTeamLeague">
                            <div className="firstTeamLogo">
                                <img src={require('./assets/img/manchester-united.png')}/>
                            </div>
                            <div className="firstTeamName">
                            منچستر یونایتد
                            </div>
                            <div className="firstTeamScore">
                                <span className="matchWinner">
                                    4
                                </span>
                            </div>
                        </div>
                        <div className="leagueVersus">
                            v.s.
                        </div>
                        <div className="secondTeamLeague">
                            <div className="secondTeamLogo">
                                <img src={require('./assets/img/fulham.png')}/>
                            </div>
                            <div className="secondTeamName">
                                فولهام
                            </div>
                            <div className="secondTeamScore">
                                <span className="matchLoser">
                                    1
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="fixtureNews">
                        <div className="fixtureNewsImage">
                            <img src={require('./assets/img/manu-fulham.jpg')}/>
                        </div>
                        <div className="fixtureNewsTitle">
                            منچستر با گل‌های اشلی یانگ در دقیقه 13، خوان ماتا در دقیقه 28، لوکاکو  در دقیقه 42 و مارکوس رشفورد در دقیقه 82 قاطعانه از سد حریف قدرتمند خود فولهام با نتیجه نهایی 4 بر 1 عبور کرد. تنها گل فولهام را کامارا از روی نقطه‌ی پنالتی در دقیقه 67 به ثمر رساند.
                        </div>
                    </div>
                    <div className="leagueRelatedNews">
                        <div className="leagueRelatedNewsContainer">
                            <div className="rightRelatedNews">
                                <div className="firstTeamRelatedNews">
                                    <span className="relatedFirstTeamLogo">
                                        <img src={require('./assets/img/chelsea.png')}/>
                                    </span>
                                    <span className="relatedTeamName">چلسی</span>
                                    <span className="matchWinner">2</span>
                                </div>
                                <div className="secondTeamRelatedNews">
                                    <span className="relatedSecondTeamLogo">
                                        <img src={require('./assets/img/manchester-city.png')}/>
                                    </span>
                                    <span className="relatedTeamName">
                                        منچسترسیتی
                                    </span>
                                    <span className="matchLoser">
                                        0
                                    </span>
                                    <div className="relatedHighlights">
                                        <button>
                                            جزییات
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="leagueRelatedNewsContainer">
                        <div className="rightRelatedNews">
                                <div className="firstTeamRelatedNews">
                                    <span className="relatedFirstTeamLogo">
                                        <img src={require('./assets/img/chelsea.png')}/>
                                    </span>
                                    <span className="relatedTeamName">چلسی</span>
                                    <span className="matchWinner">2</span>
                                </div>
                                <div className="secondTeamRelatedNews">
                                    <span className="relatedSecondTeamLogo">
                                        <img src={require('./assets/img/manchester-city.png')}/>
                                    </span>
                                    <span className="relatedTeamName">
                                        منچسترسیتی
                                    </span>
                                    <span className="matchLoser">
                                        0
                                    </span>
                                    <div className="relatedHighlights">
                                        <button>
                                            جزییات
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <LeagueRanking/>
            </div>
        )
    }
}

export default League;