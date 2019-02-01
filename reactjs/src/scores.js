import React, {Component} from 'react';
import './assets/css/scores.css'
import ScorePrev from './scorepreview';
import GroupButton from './groupbutton';
import Calendar from 'react-calendar';
import {Link, Redirect} from 'react-router-dom';
import queryString from 'query-string';

export default class Scores extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options_active: false,
            groupe_button_items: [{text: 'همه بازی ها', name: 'all', isActive: true}, {text: 'مورد علاقه ها', name: 'interested'}],
            items: [],
            loaded: false,
            error: '',
            querystring: {},
        };
        this.toggle_options = this.toggle_options.bind(this);
        this.handle_groupe_button_click = this.handle_groupe_button_click.bind(this);
        this.fetch_scores = this.fetch_scores.bind(this);
        this.next_page = this.next_page.bind(this);
        this.last_page = this.last_page.bind(this);
    }

    componentDidMount() {
        var querystring = this.props.location.search? queryString.parse(this.props.location.search): {}
        if (!querystring.page) {
            querystring.page = 1;
        }
        if (!querystring.limit) {
            querystring.limit = 10;
        }
        if (!querystring.q) {
            querystring.q = 'all';
        }
        this.setState({querystring}, () => {
            this.fetch_scores();
        });
        
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.search !== prevProps.location.search) {
            this.fetch_scores();
        }
    }

    toggle_options() {
        this.setState((state) => ({options_active: !state.options_active}));
    }

    handle_groupe_button_click(name) {
        var querystring = {...this.state.querystring};
        querystring.q = name;
        this.setState({querystring}, () => {
            this.fetch_scores();
        });
    }

    fetch_scores() {
        this.setState({loaded: false});
        fetch(`${window.host}/api/get_scores/${this.get_querystring()}`).then(response => response.json()).then(result => {
            if (result.error) {
                this.setState({error: result.error, loaded: true})
            }
            else {
                this.setState({items: JSON.parse(result), loaded: true})
            }
        });
    }

    next_page() {
        var querystring = {...this.state.querystring};
        querystring.page ++;
        this.setState({querystring});
    }

    last_page() {
        var querystring = {...this.state.querystring};
        querystring.page --;
        this.setState({querystring});
    }

    get_querystring(update) {
        var querystring = {...this.state.querystring};
        for (var key in update) {
            querystring[key] = update[key];
        }
        var result = '?';
        for (var key in querystring) {
            result += `${key}=${querystring[key]}&`
        }
        return result;
    }
    
    render() {
        if (this.state.loaded) {
            return (
                <div className={'scores-container'}>
                    <div className={'score-previews-container'}>
                        {this.state.items.map((item, id) => (<ScorePrev key={id} data={item} />))}
                        <div><Link to={`?page=${this.state.querystring.page+1}&limit=${this.state.querystring.limit}`} onClick={this.next_page} >صفحه بعد</Link></div>
                        <div><Link to={`?page=${this.state.querystring.page-1}&limit=${this.state.querystring.limit}`} onClick={this.last_page} >صفحه قبل</Link></div>
                    </div>
                    <div className={'options-button'} onClick={this.toggle_options}><i class="fas fa-sliders-h"></i></div>
                    <div className={'scores-options' + (this.state.options_active ? ' active': '')}>
                        <GroupButton className={'active'} type={'radio'} onClick={this.handle_groupe_button_click} items={this.state.groupe_button_items} color={'red'} />
                        <Calendar className={'scores-calendar'} />
                    </div>
                </div>
            )
        }
        else {
            return (
                <div>{this.state.error}<br/>content is loading...</div>
            )
        }
    }
}