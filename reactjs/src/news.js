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
            news_id: this.props.match.params.id,
        }
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    }
    componentDidMount() {
        this.fetch_csrf();
        this.fetch_news();
        this.fetch_comments();
    }
    fetch_csrf() {
        fetch(`${window.host}/auth/get_csrf/`).then(response => response.json()).then(result => {this.setState({csrf: result.csrfmiddlewaretoken})})
    }
    fetch_news() {
        fetch(`${window.host}/api/news/${this.state.news_id}/`).then(response => response.json()).then(result => {
            if (result.error) {
                this.setState({error: result.error});
            }
            else {
                this.setState({
                    data: JSON.parse(result),
                    loaded: true
                });
            }
        });
    }
    fetch_comments() {
        fetch(`${window.host}/api/news/${this.state.news_id}/comments/`).then(response => response.json()).then(result => {
            if (result.error) {
                this.setState({error: result.error});
            }
            else {
                this.setState({
                    comments: JSON.parse(result),
                });
            }
        });
    }
    handleCommentSubmit(event) {
        event.preventDefault();
        var data = new FormData(event.target);
        data.append('news-id', this.state.news_id);
        data.append('csrfmiddlewaretoken', this.state.csrf);
        fetch(`${window.host}/api/comment/`, {
            method: 'POST',
            cache: 'no-cache',
            body: data,
        }).then(response => {
            this.fetch_comments();
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