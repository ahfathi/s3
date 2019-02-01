import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Leagues extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            items: [],
        }
    }
    componentDidMount() {
        fetch(`${window.host}/api/leagues/`).then(response => response.json()).then(result => {this.setState({items: JSON.parse(result), loaded: true})});
    }
    render() {
        if (this.state.loaded) {
            return (
                <div>
                    {this.state.items.map((item, id) => (
                        <div key={id}>
                            <img src={item.logo} />
                            <Link to={`/leagues/${item.id}`} >{item.name}</Link>
                        </div>
                    ))}
                </div>
            )
        }
        else {
            return (
                <div>content is loading...</div>
            )
        }
    }
}