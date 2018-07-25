import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './bot.css';

import tchat from './images/tchat.svg';

export class BoutonBot extends Component {
    render() {
        if (this.props.couleur) return <Link to="/Bot" className="boutonBot BotRouge"><img className="tchat" src={tchat} alt="bouton tchatbot"/></Link>;
        else return <Link to="/Bot" className="boutonBot BotBleu"><img className="tchat" src={tchat} alt="bouton tchatbot"/></Link>;
    }
}