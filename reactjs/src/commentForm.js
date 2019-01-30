import React, {Component} from 'react';
import './assets/css/comment.css';

export default class CommentForm extends Component {
    render(){
        return (
            <form className="commentSubmit" onSubmit={this.props.handleSubmit}>
                <div>
                    {/* TODO: email verification */}
                    <input id="username" name="username" type="username" value={this.props.username}/>
                    <label htmlFor="username">نام کاربری</label>
                </div>
                <div>
                    <textarea id="content" name="content" required placeholder="متن نظر" ></textarea>
                    <label htmlFor="content">نظر</label>
                </div>
                <div>
                    <button className="commentSendButton" type="submit">ارسال</button>
                </div>
            </form>
        )
    }
}