import React, { Component } from 'react';
import Slider from "react-slick";
import './Voyages.css';
import { Link } from 'react-router-dom';

import fleche from './images/fleche.svg';

import Data from "./Data-voyages";
import  {SimpleMap} from "./map";
import {Menu} from "./Menu";

class SimpleSliderAventure extends React.Component {
    render() {
        var settings = {
            className: "slider-voyage",
            dots: true,
            arrows: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            draggable: false
        };

        const DataVoyages = Data.map( (d, index) => {
            if (d.type === "#AVENTURE"){
                return (
                    <div key={index} className="card">
                        <article onClick={() => this.props.chargeVoyage(d.id)}>
                            <div style={{ background: d.image1 }}><p>{d.type}</p></div>
                            <div><p><span>Destination :</span> {d.destination}<br/>
                                <span>{d.date} - {d.nbJours}</span></p>
                                <p>{d.prix}</p>
                            </div>
                        </article>
                    </div>
                );
            }
        });

        return (
            <Slider className="slider-voyage" {...settings}>
                {DataVoyages}
            </Slider>
        );
    }
}

class SimpleSliderJob extends React.Component {
    render() {
        var settings = {
            className: "slider-voyage",
            dots: true,
            arrows: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            draggable: false
        };

        const DataVoyages2 = Data.map( (d, index) => {
            if (d.type === "#MINI-JOB"){
                return (
                    <div key={index} className="card">
                        <article onClick={() => this.props.chargeVoyage(d.id)}>
                            <div style={{ background: d.image1 }}><p>{d.type}</p></div>
                            <div><p><span>Destination :</span> {d.destination}<br/>
                                <span>{d.date} - {d.nbJours}</span></p>
                                <p>{d.prix}</p>
                            </div>
                        </article>
                    </div>
                );
            }
        });

        return (
            <Slider className="slider-voyage" {...settings}>
                {DataVoyages2}
            </Slider>
        );
    }
}

export class Voyages extends Component {
    state = {page: true, id : 0};

    chargeVoyage = (id) => {
        this.setState( () => {
           return{
               page: false,
               id: id - 1
           };
        });
    };

    quitteVoyage = () => {
        this.setState( () => {
            return{
                page: true,
            };
        });
    };

    render() {
        var settings = {
            className: "slider-photo",
            dots: false,
            arrows: false,
            draggable: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            fade: true,
            easing: "linear"
        };

        if(this.state.page){
            return (
                <div className="Voyages">
                    <Menu couleur={false}/>
                    <section style={{ background: Data[2].image2 }}>
                        <h1>#VOYAGES</h1>
                    </section>
                    <section>
                        <h2 className="titre-voyage">Voyages "Aventure"</h2>
                        <SimpleSliderAventure chargeVoyage={this.chargeVoyage} />
                        <h2 className="titre-voyage">Voyages "Mini-job"</h2>
                        <SimpleSliderJob chargeVoyage={this.chargeVoyage} />
                        <h2 className="titre-voyage">Une idée de voyage ?</h2>
                        <form>
                        <textarea placeholder="une idée..." name="idee">
                        </textarea>
                            <input type="submit" name="submit" value="Envoyer" />
                        </form>
                    </section>
                </div>
            );
        }
        return (
            <div className="Voyage">
                <Menu couleur={false}/>
                <section>
                    <div className="retour">
                        <img src={fleche} alt="retour aux voyages" onClick={this.quitteVoyage}/>
                        <p>Retour</p>
                    </div>
                    <p className="type">{Data[this.state.id].type}</p>
                    <Slider {...settings}>
                        <div className="photo">
                            <article style={{background: Data[this.state.id].image1}}/>
                        </div>
                        <div className="photo">
                            <article style={{ background: Data[this.state.id].image2 }}/>
                        </div>
                        <div className="photo">
                            <article style={{ background: Data[this.state.id].image3 }}/>
                        </div>
                    </Slider>
                </section>
                <section>
                    <article>
                        <h1 className="titre-voyage">{Data[this.state.id].nom}</h1>
                        <p>{Data[this.state.id].description}</p>
                    </article>
                    <article>
                        <p><span className="bluetitle">Destination :</span> {Data[this.state.id].destination}</p>
                        <SimpleMap lat={Data[this.state.id].lat} lng={Data[this.state.id].lng} nom={Data[this.state.id].nom}/>
                    </article>
                    <article>
                        <p><span className="bluetitle">Dates</span><br/>
                        du {Data[this.state.id].date} ({Data[this.state.id].nbJours})</p>
                        <p><span className="bluetitle">Prix</span><br/>
                            {Data[this.state.id].prix}</p>
                    </article>
                    <article>
                    <p><span className="bluetitle">Le prix contient</span></p>
                        <ul>
                            <li>- Le billet d'avion</li>
                            <li>- La location</li>
                            <li>- La caution de la location</li>
                            <li>- Les activités</li>
                            <li>- La nourriture</li>
                            <li>- La location des véhicules</li>
                            <li>- Les sorties prévues</li>
                        </ul>
                    </article>
                    <Link to="/Reserver" className="reserve">RESERVER</Link>
                </section>
            </div>
        );
    }
}