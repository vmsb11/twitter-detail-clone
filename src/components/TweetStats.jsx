import React, { Component } from 'react';
import './TweetStats.css';

export default class TweetStats extends Component {
    
    render() {
        return (
            <div className="TweetStats">
                <div className="Detail">
                    <div className="RTs">
                        <p style={{fontWeight: 'bold'}}>
                            {this.props.retweets}
                        </p>
                        <p style={{color: 'gray'}}>
                            Retweets
                        </p>
                    </div>
                    <div className="Likes">
                        <p style={{fontWeight: 'bold'}}>
                            {this.props.likes}
                        </p>
                        <p style={{color: 'gray'}}>
                            Curtidas
                        </p>
                    </div>
                </div>
                <hr/>
            </div>
        );
    }
}
