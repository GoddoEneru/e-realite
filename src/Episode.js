import React, { Component } from 'react';
import './Episode.css';

import Data from "./Data-erealite";
import Data2 from "./Data-vidéos";
import fleche from './images/pikuto.jpg';

export class Episode extends Component {
    playPause = () => {

    };

    render() {
        const opts = {
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
                enablejsapi: 1
            }
        };

        return <div className="pageVideo">
            <section>
                <div className="retour">
                    <img src={fleche} alt="retour à l'erealité" onClick={this.props.quitte}/>
                    <p>Retour</p>
                </div>
                <article className="video">
                    <div className="widthVideo">

                    </div>
                </article>
                <article className="commentaire">

                </article>
                <article className="controle">
                    <img src={fleche} alt="play / pause" onClick={this.playPause}/>
                </article>
            </section>
        </div>;
    }
}