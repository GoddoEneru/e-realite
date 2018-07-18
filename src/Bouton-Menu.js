import React, { Component } from 'react';

import fleche from './images/pikuto.jpg';

export class BoutonMenu extends Component {
    render() {
        if (this.props.couleur) return <span className="bouton MenuRouge" onClick={this.props.toggleMenu}><img className="burger" src={fleche} alt="menu burger"/></span>;
        else return <span className="bouton MenuBleu" onClick={this.props.toggleMenu}><img className="burger" src={fleche} alt="menu burger"/></span>;
    }
}