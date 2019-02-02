import React, {Component} from 'react';
import NewsPreview from './newsPreview';
import queryString from 'query-string';
import {Link} from 'react-router-dom';

export default class NewsFeed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items_loaded: false,
            items: [],
            error: '',
            querystring: this.props.location.search? queryString.parse(this.props.location.search): {page: 1, limit: 10},
            subnav_items: this.props.subnav_items,
        }
        this.nextPage = this.nextPage.bind(this);
        this.lastPage = this.lastPage.bind(this);
    }
    
    get_querystring() {
        var querystring = {...this.state.querystring};
        var result = '?';
        for (var key in querystring) {
            result += `${key}=${querystring[key]}&`
        }
        return result;
    }

    fetchNews() {
        fetch(`${window.host}/api/news_feed/${this.get_querystring()}` + (this.props.interested? 'interested=1': '')).then(response => response.json()).then(result => {
            if (result.error) {
                this.setState({error: result.error, items_loaded: false});
            }
            else {
                this.setState({items: JSON.parse(result), items_loaded: true, error: ''});
            }
        });
    }
    
    componentDidMount() {
        this.fetchNews();
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.search !== prevProps.location.search || (this.props.interested != prevProps.interested)) {
            this.fetchNews()
        }
    }

    nextPage() {
        this.setState({querystring: {page: parseInt(this.state.querystring.page)+1, limit: this.state.querystring.limit}})
    }
    lastPage() {
        this.setState({querystring: {page: parseInt(this.state.querystring.page)-1, limit: this.state.querystring.limit}})
    }

    render() {
        if (this.state.items_loaded) {
            return (
                <div className={'news-feed-container'}>
                    {this.state.items.map(item => <NewsPreview key={item.id} data={item} />)}
                    <div><Link to={`?page=${parseInt(this.state.querystring.page)+1}&limit=${this.state.querystring.limit}`} onClick={this.nextPage}>صفحه بعد</Link></div>
                    <div><Link to={`?page=${parseInt(this.state.querystring.page)-1}&limit=${this.state.querystring.limit}`} onClick={this.lastPage}>صفحه قبل</Link></div>
                </div>
            );
        }
        else if (this.state.error) {
            return (<div className={'error-container'}>{this.state.error}</div>);
        }
        else {
            return (<div>content is loading...</div>);
        }
    }
}