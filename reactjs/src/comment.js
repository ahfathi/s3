import React, {Component} from 'react';

export default class Comment extends Component {
    render() {
        var data = this.props.data;
        return(
            <div className="commentReaderNews">
                <div className="commentHeader">
                    <div className="commentAuthor">
                        <img className={'comment-avatar'} src={data.avatar} />
                        {data.nickname}
                    </div>
                    <div className="commentDate">
                        <i className="far fa-calendar-alt"></i>
                        {data.date}
                    </div>
                </div>
                <hr/>
                <div className="commentReaderBody">
                    {data.content}
                </div>
            </div>
        )
    }
}