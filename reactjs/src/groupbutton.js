import React, {Component} from 'react';
import './assets/css/groupbutton.css';

export default class GroupButton extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.props.items.forEach((item) => {this.state[item.text] = {isActive: false}})
        this.button_color = 'button ' + this.props.color;
        if (!this.props.type || this.props.type === 'select') {
            this.activate = this.select_type_activate.bind(this);
        }
        else if (this.props.type === 'radio') {
            this.activate = this.radio_type_activate.bind(this);
        }
        else if (this.props.type === 'none') {
            this.activate = () => {};
        }
    }
    radio_type_activate(text) {
        this.props.items.forEach((item) => {this.state[item.text] = {isActive: false}})
        this.setState({[text]: {isActive: true}})
    }
    select_type_activate(text) {
        this.setState({[text]: {isActive: !this.state[text].isActive}});
    }
    render() {
        return (
            <div className={'group-buttons' + (this.props.className ? ` ${this.props.className}`: '')}>
                {this.props.items.map((item) => (
                    <div key={item.text} className={this.button_color + (this.state[item.text].isActive ? ' active': '')} onClick={() => {this.activate(item.text)}} >{item.text}</div>
                ))}
            </div>
        )
    }
}