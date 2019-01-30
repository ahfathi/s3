import React, {Component} from 'react';
import './assets/css/timeline.css';

export default class TimeLine extends Component {
    render() {
        return (
            <div class="timeline">
                <div class="ft">
                    <span>گل</span>
                </div>
                <div class="timelineBar">
                    <span class="kickOff"> KO </span>
                    <span class="timelineEventsFH">13</span>
                    <span class="halfTime"> HT</span>
                    <span class="timelineEventsSH"></span>
                    <span class="finalTime">FT</span>
                </div>
                <div class="st">
                    <span>کارت زرد</span>
                </div>
            </div>
        )
    }
}