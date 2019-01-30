import React, { Component } from 'react';

import './assets/css/team.css'
import Scores from './scores';

class Team extends Component {
    render (){
        return (
            <div>
            <div className="teamNameInformationContainer">
                <div className="teamNameInfo">
                    <div className="teamLogo">
                        <img src={require('./assets/img/manchester-united.png')} />
                    </div>
                    <div className="teamNameContainer">
                        <div>منچستر یونایتد</div>
                        <div>
                            <button className="teamFollow">
                                دنبال کن
                            </button>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="teamMatchPlayer">
                    <div className="teamPlayers">
                        
                        <div className="teamPlayerContainer">

                            <div>عکس</div>
                            <div>نام بازیکن</div>
                            <div>پست</div>

                            <div className="teamPlayerPic">
                                <img src={require('./assets/img/MehranAsghari.jpg')} />
                            </div>
                            <div>مهران اصغری</div>
                            <div>حمله</div>

                            <div className="teamPlayerPic">
                                <img src={require('./assets/img/MehranAsghari.jpg')} />
                            </div>
                            <div>اکبر غیوری</div>
                            <div>دفاع</div>


                            <div className="teamPlayerPic">
                                <img src={require('./assets/img/MehranAsghari.jpg')} />
                            </div>
                            <div>مهران اکبری</div>
                            <div>دروازه‌بان</div>
                        </div>
                    </div>
                </div>
                <div className="matchNews">
                    <div className="matchNewsTitle">
                        اخبار بازی
                    </div>
                    <div className="matchNewsContainer">
                        <div className="matchNewsContent">
                        <img src={require('./assets/img/manu-fulham.jpg')} />
                            <div>
                            منچستر یونایتد اولین پیروزی لیگ برتر را در پنج بازی با پیروزی 4-1 راحت در برابر فولهام پایین در اولدترافورد به دست آورد.

یك بار دیگر با پول پاگبا در نیمکت نشست، یونایتد هیچ وقت در یافتن یك ریتم شكست نیافت، زیرا اشلی یانگ اولین گل خود را در تمام رقابت ها برای یونایتد از سال 2017 به ثمر رساند تا توپ را در دقیقه 13 به پایان برساند.
                            </div>
                        </div>
                        <hr/>
                        <div className="matchNewsContent">
                            <img src={require('./assets/img/manu-fulham1.jpg')} />
                            <div>
                            خوان ماته سپس یک گل دوم را به ثمر رساند تا گل دوم خود را به ثمر برساند، در دقیقه 28، قبل از اینکه Romelu Lukaku گل اول خود را از ماه مارس به ثمر رساند تا قبل از نیمه اول گل سوم را به ثمر برساند.

    در دیدار با یک تفاوت منفی منفی، یونایتد نیاز به یک عملکرد اعتمادسازی داشت و مسابقه علیه دفاع متضاد لیگ برتر، همان چیزی بود که دکتر دستور داد.
                            </div>
                        </div>
                        <hr/>

                    </div>
                </div>
            </div>
            <div className="team-scores">
                <div className="teamFixture">
                    <div className="fixtureFilter">
                        <button>امتیازات</button>
                    </div>
                </div>
                <Scores />
            </div>



            </div>
        )
    }
}

export default Team