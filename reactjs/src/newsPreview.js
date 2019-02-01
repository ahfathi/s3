import React, { Component } from "react";
import {Link} from 'react-router-dom';

import ImageShow from './imageShow.js'
import './assets/css/newsPreview.css';


class NewsPreview extends Component {
    render() {
        var data = this.props.data;
        return (
            <div className="newsPreviewContainer">
                <div className="newsPreview">
                    <img className={'news-prev-image'} src={data.image} alt="football" />
                    <div className="newsPreviewTitle"><Link to={`/news/${data.id}`}>{data.title}</Link></div>
                    <hr/>
                    <div className="newsPreviewPreview">{data.text}</div>
                    <div className="newsPreviewFooter">
                        <div className="visitCount">
                            <i class="fas fa-comment"> {data.comments}</i>
                            <span style={{width:'15px', display: 'inline-block'}}></span>
                            <i class="fas fa-eye"> {data.views}</i>
                        </div>
                    </div>
                
                </div>
            </div>
        )
    }
}


export default NewsPreview;