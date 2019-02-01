import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import NewsFeed from './newsFeed';
import Subnav from './subnav';
import News from './news';
import Scores from './scores'
import League from './league';
import Leagues from './leagues';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subnav_items: [
                {
                    text: 'آخرین اخبار',
                    url: '/news',
                },
                {
                    text: 'مورد علاقه‌ها',
                    url: '/news/interested',
                },
                {
                    text: 'بازی‌ها',
                    url: '/scores',
                },
                {
                    text: 'لیگ‌ها',
                    url: '/leagues',
                }
            ],
        }
    }

    render() {
        return (
            <Switch>
                <Route exact path='/' render={(props) => (
                    <Redirect to='/news' />
                )} />
                <Route exact path='/news' render={(props) => {
                    var subnav_items = this.state.subnav_items
                    for (var i=0; i<subnav_items.length; i++) {
                        if (subnav_items[i].url == props.match.path) {
                            subnav_items[i].isActive = true;
                        }
                        else {
                            subnav_items[i].isActive = false;
                        }
                    }
                    this.state.subnav_items = subnav_items;
                    return (
                        <div class="main-container">
                            <Subnav items={subnav_items} />
                            <NewsFeed {...props} interested={false}/>
                        </div>
                    )
                }} />
                <Route exact path='/news/interested' render={(props) => {
                    var subnav_items = this.state.subnav_items
                    for (var i=0; i<subnav_items.length; i++) {
                        if (subnav_items[i].url == props.match.path) {
                            subnav_items[i].isActive = true;
                        }
                        else {
                            subnav_items[i].isActive = false;
                        }
                    }
                    this.state.subnav_items = subnav_items;
                    return (
                        <div class="main-container">
                            <Subnav items={subnav_items} />
                            <NewsFeed {...props} interested={true}/>
                        </div>
                    )
                }} />
                <Route exact path='/news/:id' render={(props) => {
                    return (
                        <div className={'main-container'}>
                            <Subnav items={this.state.subnav_items} />
                            <News {...props} />
                        </div>
                    )
                }} />
                <Route exact path='/scores' render={(props) => {
                    var subnav_items = this.state.subnav_items
                    for (var i=0; i<subnav_items.length; i++) {
                        if (subnav_items[i].url == props.match.path) {
                            subnav_items[i].isActive = true;
                        }
                        else {
                            subnav_items[i].isActive = false;
                        }
                    }
                    this.state.subnav_items = subnav_items;
                    return (
                        <div class="main-container">
                            <Subnav items={subnav_items} />
                            <Scores {...props}/>
                        </div>
                    )
                }} />
                <Route exact path='/leagues' render={(props) => {
                    var subnav_items = this.state.subnav_items
                    for (var i=0; i<subnav_items.length; i++) {
                        if (subnav_items[i].url == props.match.path) {
                            subnav_items[i].isActive = true;
                        }
                        else {
                            subnav_items[i].isActive = false;
                        }
                    }
                    this.state.subnav_items = subnav_items;
                    return (
                        <div class="main-container">
                            <Subnav items={subnav_items} />
                            <Leagues {...props} />
                        </div>
                    )
                }} />
                <Route exact path='/leagues/:id' render={(props) => {
                    return (
                        <div class="main-container">
                            <Subnav items={this.state.subnav_items} />
                            <League {...props}/>
                        </div>
                    )
                }} />
            </Switch>
        )
    }
}