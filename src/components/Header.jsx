import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <div className="Header">
                <a href="#" className="LinkComment">
                    <i class="fa fa-arrow-left"></i>
                </a>
                <h3>Tweetar</h3>
            </div>
        );
    }
}
