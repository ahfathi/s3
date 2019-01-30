import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import NewsFeed from './newsFeed';
import Subnav from './subnav';
import News from './news';

export default class NewsManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subnav_items: [],
            subnav_loaded: false,
        }
    }

    componentDidMount() {
        fetch((window.host + '/api/get_news_subnav_items')).then(response =>  response.json()).then((items) => {this.setState({subnav_items: JSON.parse(items), subnav_loaded:true})});
    }

    render() {
        return (
            <Switch>
                <Route exact path='/' render={(props) => {
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
                            <Subnav items={subnav_items} loaded={this.state.subnav_loaded} />
                            <NewsFeed {...props} interested={false}/>
                        </div>
                    )
                }} />
                <Route exact path='/interested' render={(props) => {
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
                            <Subnav items={subnav_items} loaded={this.state.subnav_loaded} />
                            <NewsFeed {...props} interested={true}/>
                        </div>
                    )
                }} />
                <Route exact path='/news/:id' render={(props) => {
                    console.log('#')
                    return (
                        <div className={'main-container'}>
                            <Subnav items={this.state.subnav_items} loaded={this.state.subnav_loaded} />
                            <News {...props} />
                        </div>
                    )
                }} />
            </Switch>
        )
    }
}