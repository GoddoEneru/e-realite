import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import backvideo from './images/picto-video.svg';
import backvoyage from './images/picto-voyage.svg';

export class Home extends Component {
    render() {
        return (
            <div className="Home" style={{height: window.innerHeight }}>
                <section>
                    <p>Découvrez nos voyages !</p>
                    <div>
                        <p>Des voyages organisés pour les fans de téléréalité</p>
                        <Link to="/Voyages">VOIR PLUS</Link>
                    </div>
                    <img src={backvoyage} alt="catégorie voyage"/>
                </section>
                <section>
                    <p>Regardez nos vidéos !</p>
                    <div>
                        <p>Des e-réalités filmées grâce à vous !</p>
                        <Link to={{ pathname: '/Videos', state: { page: true, id: 0} }}>VOIR PLUS</Link>
                    </div>
                    <img src={backvideo} alt="catégorie vidéo"/>
                </section>
            </div>
        );
    }
}