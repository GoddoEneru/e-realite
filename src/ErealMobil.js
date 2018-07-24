import React, { Component } from 'react';
import './ErealMobil.css';
import fleche from './images/pikuto.jpg';

import {Menu} from "./Menu";

export class ErealMobil extends Component {
    render() {
        return <div className="ErealMobil">
            <Menu couleur={true}/>
            <img alt="logo" className="logo" src={fleche}/>
            <p>E-réalité sur votre<br/>smartphone ou tablette</p>
            <a className="app" href="">Télécharger l'application</a>
        </div>;
    }
}