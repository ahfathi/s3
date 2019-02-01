import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './assets/css/default.css';
import './navbar.js';
import Navbar from './navbar.js';
import Comment from './commentForm';
import NewsFeed from './newsFeed';
import News from './news';
import NewsPreview from './newsPreview.js';
import Subnav from './subnav.js';
import PlayerInformation from './playerInformation.js'
import League from './league.js';
import FootballMatch from './footballMatch.js'
import Team from './team.js'
import NewsManager from './newsManager';
import Scores from './scores';


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn: false, 
            currentSport: 'Football',
        }
    }
    componentWillMount() {
        window.host = 'http://localhost:8000';
    }
    render() {
        return (
            <div>
                <Navbar isLoggedIn = {this.state.isLoggedIn} currentSport={this.state.currentSport} />

                <Switch>
                    <Route exact path='/' render={props => (
                        <Redirect to='/news' />
                    )} />
                    <Route path='/news' component={NewsManager} />
                    <Route exact path='/scores' render={props => (
                        <div className={'main-container'}><Scores {...props} /></div>
                    )} />
                </Switch>
                
                <div class="main-container">
                    {/* <News title={'وقتی سیم کنعانی‌زادگان و خلعتبری اتصالی کرد!'} image_src={'https://static.farakav.com/files/pictures/thumb/01361431.jpg'} image_alt={''} date={'۲۲ آذر ۹۷'} source={'پشمک نیوز'} tags={['سیم', 'اتصالی', 'خلعتبری']} content={[{type: 'text', value: 'به گزارش "ورزش سه"، بازی تیم های پدیده و ماشین سازی که با استقبال بسیار خوب تماشاگران همراه شده بود در دقایق پایانی به جنجال کشیده شد.\n\n'}, {type: 'heading', value: 'سکانس اول'}, {type: 'text', value: 'دقیقه ۵۲ ماشین سازی توسط مدافع ملی پوش خود برای دومین بار توانست بازی را به تساوی بکشاند. تماشاگران و بازیکنان پدیده معتقد بودند توپ از خط رد نشده اما تصاویر آهسته مشخص می کند که گل کاملا سالم به ثمر رسیده است. با این حال تماشاگران که همچون نیمکت نشینان و بازیکنان پدیده از عملکرد داور دیدار به هیچ وجه رضایت ندارند به این گل بدبین و از آن عصبی اند.\n\n\n'}, {type: 'image', url: 'https://static2.farakav.com/files/pictures/01361428.jpg', alt:''}, {type: 'image', url: 'https://static2.farakav.com/files/pictures/01361429.jpg', alt:''}, {type: 'headding', value: 'سکانس پایانی'}, {type: 'text', value: 'سوت پایان بازی امتیازات را تقسیم می کند. خلعتبری به سمت داور می رود و نسبت به عملکرد او به تندی اعتراض می کند نیمکت نشینان دو تیم درگیری نسبتا شدیدی با یکدیگر پیدا کرده اند که دقیقا مشخص نیست به چه خاطر است که کنعانی زادگان پیراهنش را در می آورد و آن را روی هوا می چرخاند. خلعتبری با دیدن این حرکت با سرعت و عصبانیت به سمت تنها ملی پوش حاضر در زمین می دود.‌ بازیکنان دو تیم سعی می کنند مانع درگیری شوند اما درگیری ادامه دار نیمکت نشینان و این حرکت جنجالی گلزن تیم تبریزی، تماشاگران را هم به شدت عصبی می کند. نیروی انتظامی وارد عمل می شود تا بازیکنان میهمان و تیم داوری را از زمین خارج کند. درگیری های لفظی و تنش های فیزیکی همچنان ادامه دارد. انگار خیلی ها توقع یک بازی سفت و محکم از شاگردان مهاجری مقابل پدیده صدرنشین را نداشته اند. بخصوص کمیته داوران که دیداری در این حد حساس را به داوری با سابقه نه چندان خوب در این فصل سپرده است.'}]} /> */}
                    {/* <FootballMatch/> */}
                    {/* <Team/> */}
                    {/* <League/> */}
                    {/* <PlayerInformation url={require('./assets/img/MehranAsghari.jpg')} playerName={'مهران اصغری'} age={20} position={'اون پشتا'} weight={71} height={180} team={'پرسپولیس'} nationality={'ایران'} appearanceNo={10} goalNo={2} assistNo = {1} yellowCards={3} redCards={1}/> */}
                </div>
            </div>

        )
    }
}

ReactDOM.render((
    <BrowserRouter>
        <App/>
    </BrowserRouter>
), document.getElementById('root'))

