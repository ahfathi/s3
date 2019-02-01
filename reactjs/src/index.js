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
import Home from './Home';
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
                    <Route path='/' component={Home} />
                </Switch>
                
                <div class="main-container">
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

