import React, { Component } from 'react';
import './Live.css';

import Data from "./Data-erealite";

import fleche from './images/fleche.svg';

export class Live extends Component {

    render() {
        return <div className="pageLive">
            <div className="retour">
                <img src={fleche} alt="retour aux erealité" onClick={this.props.quitte}/>
                <p>Retour</p>
            </div>
            <div className="live">
                <iframe src="https://www.youtube.com/embed/a-M_5rGhPdg?autoplay=1&controls=0&modestbranding=1&showinfo=0&enablejsapi=1" frameBorder="0"/>
            </div>
            <h1>{Data[this.props.idErealite].nom}</h1>
            <span className="top"></span>
            <span className="bot"></span>
            <div className="formulaire">
                <form>
                    <input type="text" name="tchat" placeholder="Dites quelque chose.."/>
                </form>
            </div>
        </div>;
    }
}