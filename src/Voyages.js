import React, { Component } from 'react';
import Slider from "react-slick";
import './Voyages.css';
import { Link } from 'react-router-dom';

import fleche from './images/pikuto.jpg';

import Data from "./Data-voyages";
import  {SimpleMap} from "./map";

class SimpleSliderAventure extends React.Component {
    render() {
        var settings = {
            className: "slider-voyage",
            dots: true,
            arrows: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true
        };

        const DataVoyages = Data.map( (d, index) => {
            return (
                <div className="card" style={{ width: 420 }}>
                    <article key={index} onClick={() => this.props.chargeVoyage(d.id)}>
                        <div style={{ background: d.image1 }}><p>{d.type}</p></div>
                        <div><p><span>Destination :</span> {d.destination}<br/>
                            <span>{d.date} - {d.nbJours}</span></p>
                            <p>{d.prix}</p>
                        </div>
                    </article>
                </div>
            );
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
            variableWidth: true
        };
        return (
            <Slider className="slider-voyage" {...settings}>
                <div className="card" style={{ width: 420 }}>
                    <article>
                        <div><p>#MINI-JOB</p></div>
                        <div><p><span>Destination :</span> Chamonix-Mont Blanc<br/>
                            <span>12 au 25 Novembre - 15 jours</span></p>
                            <p>3000 €</p>
                        </div>
                    </article>
                </div>
                <div className="card" style={{ width: 420 }}>
                    <article>
                        <div><p>#MINI-JOB</p></div>
                        <div><p><span>Destination :</span> Chamonix-Mont Blanc<br/>
                            <span>12 au 25 Novembre - 15 jours</span></p>
                            <p>3000 €</p>
                        </div>
                    </article>
                </div>
                <div className="card" style={{ width: 420 }}>
                    <article>
                        <div><p>#MINI-JOB</p></div>
                        <div><p><span>Destination :</span> Chamonix-Mont Blanc<br/>
                            <span>12 au 25 Novembre - 15 jours</span></p>
                            <p>3000 €</p>
                        </div>
                    </article>
                </div>
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
                    <section>
                        <h1>#VOYAGES</h1>
                    </section>
                    <section>
                        <h2 className="titre-voyage">Voyages "Aventure"</h2>
                        <SimpleSliderAventure chargeVoyage={this.chargeVoyage} />
                        <h2 className="titre-voyage">Voyages "Mini-job"</h2>
                        <SimpleSliderJob/>
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
                <section>
                    <img src={fleche} alt="retour aux voyages" onClick={this.quitteVoyage}/>
                    <p>{Data[this.state.id].type}</p>
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
                    <p><span className="bluetitle">Détails du prix</span></p>
                        <ul>
                            <li>- Le Lorem Ipsum est simplement du faux texte employé</li>
                            <li>- Le Lorem Ipsum est simplement du faux texte employé dans la composition</li>
                            <li>- Le Lorem Ipsum est simplement du</li>
                            <li>- Le Lorem Ipsum est simplement du faux texte</li>
                            <li>- Le Lorem Ipsum est simplement du faux texte employé dans</li>
                            <li>- Le Lorem Ipsum est simplement du faux texte employé dans la composition</li>
                            <li>- Le Lorem Ipsum est simplement du faux texte employé</li>
                        </ul>
                    </article>
                    <Link to="/Reserver" className="reserve">RESERVER</Link>
                </section>
            </div>
        );
    }
}