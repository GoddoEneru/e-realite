import React, { Component } from 'react';
import Slider from "react-slick";
import './Erealite.css';

import Data from "./Data-erealite";
import Data2 from "./Data-vidéos";
import fleche from './images/pikuto.jpg';
import playHover from './images/picto-video2.svg';
import {Episode} from "./Episode";

class SliderEpisode extends React.Component {
    render() {
        var settings = {
            className: "slider-episode",
            dots: false,
            arrows: true,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true
        };

        const DataEpisodes = Data2.map( (d, index) => {
            if(d.cat === 1)
                return (
                    <div key={index} className="card" style={{ width: 270 }}>
                        <article onClick={() => this.props.charge(d.id, d.cat)}>
                            <div style={{background: d.image1}}>
                                <span></span>
                                <img src={playHover} alt="lire la vidéo"/>
                            </div>
                            <p><span>{d.nom}</span><br/>
                                <span>{d.date}</span></p>
                        </article>
                    </div>
                );
        });

        return (
            <Slider {...settings}>
                {DataEpisodes}
            </Slider>
        );
    }
}

class SliderMeilleur extends React.Component {
    render() {
        var settings = {
            className: "slider-meilleur",
            dots: false,
            arrows: true,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true
        };

        const DataEpisodes = Data2.map( (d, index) => {
            if(d.cat === 2)
                return (
                    <div key={index} className="card" style={{ width: 270 }}>
                        <article onClick={() => this.props.charge(d.id, d.cat)}>
                            <div style={{background: d.image1}}>
                                <span></span>
                                <img src={playHover} alt="lire la vidéo"/>
                            </div>
                            <p><span>{d.nom}</span><br/>
                                <span>{d.date}</span></p>
                        </article>
                    </div>
                );
        });

        return (
            <Slider {...settings}>
                {DataEpisodes}
            </Slider>
        );
    }
}

export class Ereal extends Component {
    state = {id : 0, cat: 1};

    charge = (id, cat) => {
        this.setState( () => {
            return{
                cat: cat,
                id: id
            };
        });
    };

    quitte = () => {
        this.setState( () => {
            return{
                cat: 0,
            };
        });
    };



    render() {
        if(this.state.cat === 0){
            return <div className="Erealite">
                <section>
                    <div className="retour">
                        <img src={fleche} alt="retour aux erealité" onClick={this.props.quitteErealite}/>
                        <p>Retour</p>
                    </div>
                    <article className="live">
                        <h2>Live</h2>
                        <div className="fullWidthLive">
                            <iframe src="https://www.youtube.com/embed/a-M_5rGhPdg?autoplay=1&controls=0&modestbranding=1&showinfo=0&enablejsapi=1" frameBorder="0" allowFullScreen/>
                        </div>
                        <div className="infoErealite">
                            <h1>{Data[this.props.id].nom}</h1>
                            <p>{Data[this.props.id].description}</p>
                        </div>
                    </article>
                    <article className="episodes">
                        <h2>Episodes</h2>
                        <SliderEpisode charge={this.charge}/>
                    </article>
                    <article className="meilleurs">
                        <h2>Meilleurs moments</h2>
                        <SliderMeilleur charge={this.charge}/>
                    </article>
                </section>
            </div>;
        }

        if(this.state.cat === 1 || this.state.cat === 2){
            return <Episode quitte={this.quitte}/>;
        }

        if(this.state.cat === 3){
            return <div className="Erealite">
                <section>

                </section>
            </div>;
        }
    }
}