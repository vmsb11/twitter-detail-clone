import React, { Component } from 'react';
import './TweetHeader.css';

export default class TweetHeader extends Component {
    render() {
        return (
            <div className="TweetHeader">
                <div className="ImageDetail">
                    <img src={require('../images/sccp.jpg')} alt=""/>
                </div>
                <div className="AccountDetail">
                    <p className="Name">{this.props.name}</p>
                    <p className="User">{this.props.user}</p>
                </div>
            </div>
        );
    }
}
