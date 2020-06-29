import React, { Component } from 'react';
import './TweetOptions.css';

export default class TweetOptions extends Component {
    
    render() {
        return (
            <div className="TweetOptions">
                <a href="#" className="LinkComment">
                    <i class="fa fa-comment-o"></i>
                </a>
                <a href="#" className="LinkRT">
                    <i class="fa fa-retweet"></i
                ></a>
                <a href="#" className="LinkLike">
                    <i class="fa fa-heart-o"></i>
                </a>
                <a href="#" className="LinkSave">
                    <i class="fa fa-upload"></i>
                </a>
            </div>
        );
    }
}
