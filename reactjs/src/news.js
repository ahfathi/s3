import React, {Component} from 'react';
import './assets/css/news.css';
import fix_new_lines from './utils.js';
import CommentForm from './commentForm';
import Comment from './comment';

export default class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            error: '',
            data: {},
            csrf: '',
            comments: [],
        }
    }
    componentDidMount() {
        this.fetch_csrf();
        fetch(window.host + '/api' + this.props.location.pathname).then(response => response.json()).then(res => {
            var result = JSON.parse(res);
            if (result.error) {
                this.setState({error: result.error});
            }
            else {
                this.setState({
                    data: result.data,
                    comments: result.comments,
                    loaded: true
                });
            }
        });
    }
    fetch_csrf() {
        fetch(window.host + '/auth/get_csrf').then(response => response.json()).then(result => {this.setState({csrf: result.csrfmiddlewaretoken})})
    }
    handleCommentSubmit(event) {
        event.preventDefault();
        var data = new FormData(event.target);
        data.append('news-id', this.props.match.params.id);
        data.append('csrfmiddlewaretoken', this.state.csrf);
        fetch(window.host + '/api/comment/', {
            method: 'POST',
            cache: 'no-cache',
            body: data,
        });
        this.fetch_csrf();
    }
    render() {
        if (this.state.loaded) {
            return (
                <div className={'news-feed-container'}>
                <div className={'box-container'}>
                    <div className={'news-title'}>{this.state.data.title}</div>
                    <img className={'news-prev-image'} src={this.state.data.cover} alt={this.state.data.title} />
                    <div className={'news-meta'}>
                        <div className={'news-date'}><i class="far fa-calendar-alt"></i>تاریخ: {this.state.data.date}</div>
                        <div className={'news-source'}>منبع: {this.state.data.source}</div>
                    </div>
                    <div className={'news-content'} dangerouslySetInnerHTML={{__html: this.state.data.content}}></div>
                    <div className={'news-tags'}>
                        برچسب ها:&nbsp;
                        {this.state.data.tags.map((tag, id) => (
                            <a key={'id'} href={'#'}>{tag}</a>
                        ))}
                    </div>
                </div>
                <div className={'commentNews'}>
                    <div className={'commentNewsTitle'}>
                        ثبت نظر
                    </div>
                    <CommentForm handleSubmit={this.handleCommentSubmit} username={this.state.data.username}/>
                </div>
                    {this.state.comments.map((comment, id) => (<Comment key={id} data={comment} />))}
                </div>
            )
        }
        else if (this.state.error) {
            return (
                <div className={'error-message'}>{this.state.error}</div>
            )
        }
        else {
            return (
                <div>content is loading...</div>
            )
        }
    }
}