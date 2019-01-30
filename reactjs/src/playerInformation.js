import React, {Component} from 'react';

import './assets/css/playerInformation.css'

class PlayerInformation extends Component {

    constructor(props){
        super(props);
        this.appearanceNo = this.appearanceNo.bind(this);
        this.appearanceOut = this.appearanceOut.bind(this);
        this.goalNo = this.goalNo.bind(this);
        this.goalOut = this.goalOut.bind(this);
        this.assistNo = this.assistNo.bind(this);
        this.assistOut = this.assistOut.bind(this);
        this.yellowCards = this.yellowCards.bind(this);
        this.yellowCardsOut = this.yellowCardsOut.bind(this);
        this.redCards = this.redCards.bind(this);
        this.redCardsOut = this.redCardsOut.bind(this);
    }

    appearanceNo(){
        let appearanceNo = document.querySelector('.appearanceNumber');
        appearanceNo.innerHTML = this.props.appearanceNo;
    }

    appearanceOut(){
        let appearanceText = document.querySelector('.appearanceNumber');
        appearanceText.innerHTML = 'بازی'
    }

    goalNo() {
        let goalNo = document.querySelector('.goalNumber');
        goalNo.innerHTML = this.props.goalNo;
    }

    goalOut(){
        let goalOut = document.querySelector('.goalNumber');
        goalOut.innerHTML = 'گل‌ها'
    }

    assistNo(){
        let assistNo = document.querySelector('.assistNumber');
        assistNo.innerHTML = this.props.assistNo;
    }

    assistOut(){
        let assistOut = document.querySelector('.assistNumber');
        assistOut.innerHTML = 'پاس گل';
    }

    yellowCards (){
        let yellowCards = document.querySelector('.yellowCards');
        yellowCards.innerHTML = this.props.yellowCards;
    }

    yellowCardsOut(){
        let yellowCardsOut = document.querySelector('.yellowCards');
        yellowCardsOut.innerHTML = 'کارت زرد';
    }

    redCards(){
        let redCards = document.querySelector('.redCards');
        redCards.innerHTML = this.props.redCards;
    }

    redCardsOut(){
        let redCardsOut = document.querySelector('.redCards');
        redCardsOut.innerHTML = 'کارت قرمز'
    }



    render () {
        return (
            <div className="playerInformation">
                <div className="playerImage">
                    <img src={this.props.url} alt={this.props.playerName} align="top" className="playerImageTag"/>
                    <div className="playerName">
                        {this.props.playerName}
                        <p>سن: {this.props.age}</p>
                        <p>پست: {this.props.position}</p>
                        <p>وزن: {this.props.weight}</p>
                        <p>قد: {this.props.height}</p>
                        <p>تیم: {this.props.team}</p>
                        <p>ملیت: {this.props.nationality}</p>
                    </div>
                </div>
                <hr/>
                <div className="playerStatistics">
                    <select>
                        <option>لیگ برتر (خلیج فارس)</option>
                        <option>لیگ قهرمانان آسیا</option>
                        <option>جام حذفی</option>
                        <option>سوپر جام</option>
                    </select>
                    <div className="playerStatisticsContainer">
                        <div className="appearanceNumber" onMouseEnter={this.appearanceNo} onMouseOut={this.appearanceOut}>
                            بازی
                        </div>
                        <div className="goalNumber" onMouseEnter={this.goalNo} onMouseOut={this.goalOut}>
                            گل‌ها
                        </div>
                        <div className="assistNumber" onMouseEnter={this.assistNo} onMouseOut={this.assistOut}>
                            پاس گل
                        </div>
                        <div className="yellowCards" onMouseEnter={this.yellowCards} onMouseOut={this.yellowCardsOut}>
                            کارت زرد
                        </div>
                        <div className="redCards" onMouseEnter={this.redCards} onMouseOut={this.redCardsOut}>
                            کارت قرمز
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="playerAwards">
                    <span>افتخارات</span>    
                    <p>- زیرآبی رفتن در لوپ دانشکده کامپیوتر</p>
                    <p>- پاس کردن درس برنامه نویسی پیشرفته</p>
                    <p>- پریدن از دایو شش متری</p>
                </div>
                <hr/>
                <div className="playerNews">
                    <span>اخبار</span>
                    <p className="playerNewsContent">
                      <p className="playerNewsTitle">فتح دانشکده‌ی مهندسی کامپیوتر دانشگاه صنعتی شریف توسط مهران اصغری با ....</p>  
                      <p className="playerNewsDate">97/09/16</p>
                    </p>
                    <p className="playerNewsContent">
                      <span className="playerNewsTitle">مهران اصغری با عقد قراردادی 3 ساله از باشگاه ابراهیم به پرسپولیس پیوست</span>  
                      <span className="playerNewsDate">97/09/12</span>
                    </p>
                </div>
            </div>
        )
    }
}

export default PlayerInformation;