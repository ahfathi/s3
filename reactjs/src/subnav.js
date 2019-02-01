import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './assets/css/subnav.css'
import { LabelGroup } from 'semantic-ui-react';

class Subnav extends Component {
    
    render () {
        return (
            <div className="subnav">
                <div className ="subnavContainer">
                    {
                        this.props.items.map((info) => {
                            var className = "subnavItem";
                            if (!info.isDroppedDown){
                                if (info.isActive){
                                    className += " active";
                                }
                            }
                            else {
                            }
                            var item = (
                                <span className={className} key={info.text.toString()}>
                                    <Link to={info.url}>
                                        {info.text}
                                    </Link>
                                </span>
                            );
                            return item;
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Subnav;