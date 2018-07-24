import React, { Component } from 'react';

import menu from './images/menu.svg';

export class BoutonMenu extends Component {
    render() {
        if (this.props.couleur) return <span className="bouton MenuRouge" onClick={this.props.toggleMenu}><img className="burger" src={menu} alt="menu burger"/></span>;
        else return <span className="bouton MenuBleu" onClick={this.props.toggleMenu}><img className="burger" src={menu} alt="menu burger"/></span>;
    }
}