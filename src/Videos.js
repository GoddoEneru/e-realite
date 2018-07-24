import React, { Component } from 'react';
import './Videos.css';

import Data from "./Data-erealite";
import { Ereal } from "./Erealite";
import {Menu} from './Menu';
import {ErealMobil} from "./ErealMobil";

export class Videos extends Component {
    state = {page: this.props.location.state.page, id : this.props.location.state.id};

    chargeErealite = (id) => {
        this.setState( () => {
            return{
                page: false,
                id: id
            };
        });
    };

    quitteErealite = () => {
        this.setState( () => {
            return{
                page: true,
            };
        });
    };

    ErealiteMobile = () => {;
        if(window.innerWidth <  768){
            this.setState( () => {
                return{
                    id: 100,
                };
            });
        }
        console.log(this.state.page)
    };

    render() {
        const Erealite = Data.map( (d, index) => {
            return (
                <article key={index} onClick={() => this.chargeErealite(d.id)}>
                    <div style={{ background: d.image1 }}><p>{d.type}</p></div>
                    <div><p><span>{d.nom}</span><br/>
                        <span>{d.nbEp}</span></p>
                    </div>
                </article>
            )
        });

        if(this.state.page === true && this.state.id === 100){
            return (
                <ErealMobil/>
            );
        }
        if(this.state.page){
            return (
                <div className="Videos" onLoad={this.ErealiteMobile}>
                    <Menu couleur={true}/>
                    <section>
                        {Erealite}
                    </section>
                </div>
            );
        }
        if(this.state.page === false){
            return (
                <Ereal id={this.state.id} quitteErealite={this.quitteErealite} onLoad={this.ErealiteMobile}/>
            );
        }
    }
}