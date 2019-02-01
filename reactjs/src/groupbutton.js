import React, {Component} from 'react';
import './assets/css/groupbutton.css';

export default class GroupButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items,
        }
        this.button_color = 'button ' + this.props.color;
        if (!this.props.type || this.props.type === 'select') {
            this.activate = this.activate.bind(this, this.select_type_activate.bind(this));
        }
        else if (this.props.type === 'radio') {
            this.activate = this.activate.bind(this, this.radio_type_activate.bind(this));
        }
        else if (this.props.type === 'none') {
            this.activate = this.activate.bind(this, ()=>{})
        }
    }
    activate(type_func, i) {
        type_func(i);
        if (this.props.onClick) {
            this.props.onClick(this.state.items[i].name);
        }
    }
    radio_type_activate(i) {
        var items = this.state.items;
        for (var j=0; j<items.length; j++) {
            items[j].isActive = false;
        }
        items[i].isActive = true;
        this.setState({items})
    }
    select_type_activate(i) {
        var items = this.state.items;
        items[i].isActive = !items[i].isActive;
        this.setState({items});
    }
    render() {
        return (
            <div className={'group-buttons' + (this.props.className ? ` ${this.props.className}`: '')}>
                {this.state.items.map((item, id) => (
                    <div key={id} className={this.button_color + (item.isActive ? ' active': '')} onClick={() => {this.activate(id)}} >{item.text}</div>
                ))}
            </div>
        )
    }
}