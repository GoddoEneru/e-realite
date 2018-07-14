import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import backvideo from './images/picto-video.svg';
import backvoyage from './images/picto-voyage.svg';

export class Home extends Component {
    render() {
        return (
            <div className="Home">
                <section>
                    <p>Découvrez nos voyages !</p>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At commodi corporis dolor ea fugit impedit molestiae molestias, natus nulla quae quas quidem sed voluptate. Atque expedita inventore minima placeat quidem!</p>
                        <Link to="/Voyages">bouton</Link>
                    </div>
                    <img src={backvoyage}/>
                </section>
                <section>
                    <p>Regardez nos vidéos !</p>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At commodi corporis dolor ea fugit impedit molestiae molestias, natus nulla quae quas quidem sed voluptate. Atque expedita inventore minima placeat quidem!</p>
                        <Link to="/Videos">bouton</Link>
                    </div>
                    <img src={backvideo}/>
                </section>
            </div>
        );
    }
}