import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';
import {BoutonMenu} from "./Bouton-Menu";

import fleche from './images/pikuto.jpg';

import Data from './Data-erealite';

export class Menu extends Component {

    toggleMenu = () => {
        if(document.querySelector(".MenuShow")){
            document.querySelector(".contenu").classList.toggle("show");
            setTimeout(function(){document.querySelector(".Menu").classList.toggle("MenuShow")}, 300);
            setTimeout(function(){document.querySelector(".burger").classList.toggle("rotation")}, 300);
        }
        else {
            document.querySelector(".Menu").classList.toggle("MenuShow");
            document.querySelector(".burger").classList.toggle("rotation");
            setTimeout(function(){document.querySelector(".contenu").classList.toggle("show")}, 300);
        }
    };

    go = () => {
        console.log(document.querySelector('.Menu'))
        document.querySelector('.Menu').style.minHeight = window.innerHeight;
    };

    render() {
        return (
            <div className="Menu" style={{minHeight: "100vh"}}>
                <BoutonMenu couleur={this.props.couleur} toggleMenu={this.toggleMenu}/>
                <div className="contenu">
                    <img src={fleche} alt="logo"/>
                    <NavLink to="/Voyages">Voyages</NavLink>
                    <NavLink to={{ pathname: '/Videos', state: { page: true, id: 0} }}>Videos</NavLink>
                    <NavLink to={{ pathname: '/Videos', state: { page: false, id: 8} }} className="sousLien">{Data[8].nom}</NavLink>
                    <NavLink to={{ pathname: '/Videos', state: { page: false, id: 7} }} className="sousLien">{Data[7].nom}</NavLink>
                    <NavLink to={{ pathname: '/Videos', state: { page: false, id: 6} }} className="sousLien">{Data[6].nom}</NavLink>
                </div>
            </div>
        );
    }
}