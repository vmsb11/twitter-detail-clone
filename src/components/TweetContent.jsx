import React, { Component } from 'react';
import TweetImage from './TweetImage';
import './TweetContent.css';

export default class TweetContent extends Component {
    render() {

        const {hasImage} = this.props || null;

        return (
            <div className="TweetContent">
                <div className="Content">
                    <p>
                        {this.props.content}
                    </p>
                    { 
                        hasImage ?
                        <TweetImage 
                            url='https://pbs.twimg.com/media/EaVRlCEX0AAMzZn?format=jpg&name=4096x4096' />
                        : ''
                    }
                </div>
                <div className="Date">
                    <p className="DateTime">
                        {this.props.datetime} &nbsp;&nbsp;.
                    </p>
                    <p className="Location">
                        {this.props.location}
                    </p>
                </div>
                <hr/>
            </div>
        );
    }
}
