import React, { Component } from 'react';
import './Episode.css';
import { Player, BigPlayButton, ControlBar, CurrentTimeDisplay, ProgressControl } from 'video-react';
import Slider from 'react-rangeslider'

import Data from "./Data-erealite";
import Data2 from "./Data-vidéos";
import fleche from './images/fleche.svg';
import playHover from './images/picto-video2.svg';
import {Menu} from './Menu';

import play from './images/play.svg';
import pause from './images/pause.svg';
import prev from './images/prev.svg';
import son from './images/son.svg';
import full from './images/full.svg';
import fulld from './images/fulld.svg';
import playlist from './images/playlist.svg';

export class Episode extends Component {
    state = { value: 100, id: this.props.idEp, isFullScreen: true, isPlay: true, };

    handleChange = (value) => {
        this.setState({
            value: value
        });
        this.refs.player.muted = false;
        this.refs.player.volume = this.state.value / 100;
    };

    changeEp = (id) => {
        this.setState({
            id: id
        });
        document.querySelector(".commentaire").classList.toggle("commentaireShow");
    };

    videoPre = () => {
        if(this.state.id < 7) {
            this.setState({
                id: this.state.id + 1
            });
        }
    };

    videoSui = () => {
        if(this.state.id > 0) {
            this.setState({
                id: this.state.id - 1
            });
        }
    };

    fullScreen = () => {
        this.refs.player.toggleFullscreen();
        this.setState({
            isFullScreen: !this.state.isFullScreen
        });
        document.querySelector(".controle").classList.toggle("controleFullScreen");
        document.querySelector(".video-react-progress-control").classList.toggle("video-react-pleinEcran");
        document.querySelector(".video-react-progress-holder").classList.toggle("video-react-pleinEcran");
        document.querySelector(".video-react-load-progress").classList.toggle("video-react-pleinEcran");
    };

    playPause = () => {
        const { player } = this.refs.player.getState();
        if (player.paused){
            this.refs.player.play();
            this.setState({
                isPlay: true
            });
        }else{
            this.refs.player.pause();
            this.setState({
                isPlay: false
            });
        }

    };

    togglePlaylist = () => {
        document.querySelector(".commentaire").classList.toggle("commentaireShow");
    };

    mute = () => {
        const { player } = this.refs.player.getState();
        this.refs.player.muted = !player.muted;

    };

    render() {

        const DataEpisodes = Data2.map( (d, index) => {
            if(d.cat === this.props.cat && d.id !== this.state.id)
                return (
                    <div key={index} className="itemPlaylist" onClick={() => this.changeEp(d.id)}>
                        <div style={{background: d.image1}}>
                            <span></span>
                            <img src={playHover} alt="lire la vidéo"/>
                        </div>
                        <p>{Data[this.props.idEreal].nom} {d.nom}</p>
                    </div>
                );
            if(d.cat === 1 && d.id === this.state.id)
                return (
                    <div key={index} className="itemPlaylist itemPlaylistActive" onClick={() => this.changeEp(d.id)}>
                        <div style={{background: d.image1}}>
                            <span></span>
                            <img src={playHover} alt="lire la vidéo"/>
                        </div>
                        <p>{Data[this.props.idEreal].nom} {d.nom}</p>
                        <img src={play} alt="en cours" className="enCours"/>
                    </div>
                );
        });

        return <div className="pageVideo">
            <Menu couleur={true}/>
            <section>
                <div className="retour">
                    <img src={fleche} alt="retour à l'erealité" onClick={this.props.quitte}/>
                    <p>Retour</p>
                </div>
                <article className="video" onDoubleClick={this.fullScreen}>
                    <Player
                        ref="player"
                        playsInline
                        poster={fleche}
                        src={Data2[this.state.id].link}
                        autoPlay={true}
                    >
                        <article className="controle">
                            <div className="container"><h1>{Data[this.props.idEreal].nom} <span>{Data2[this.state.id].nom}</span></h1></div>
                            <div className="container">
                                <img src={prev} alt="vidéo précédante" onClick={this.videoPre}/>
                                {this.state.isPlay ?  <img src={pause} alt="play / pause" className="play" onClick={this.playPause}/> : <img src={play} alt="play / pause" className="play" onClick={this.playPause}/>}
                                <img src={prev} alt="vidéo suivante" onClick={this.videoSui}/>
                            </div>
                            <div className="container">
                                <div className="volume">
                                    <Slider
                                        min={0}
                                        max={100}
                                        value={this.state.value}
                                        orientation='vertical'
                                        onChange={this.handleChange}
                                    />
                                    <img src={son} alt="son" className="son" onClick={this.mute}/>
                                </div>
                                {this.state.isFullScreen ?  <img src={full} alt="plein ecran" onClick={this.fullScreen}/> : <img src={fulld} alt="plein ecran" onClick={this.fullScreen}/>}
                                <img src={playlist} alt="liste autres épisodes" className="togglePlaylist" onClick={this.togglePlaylist}/>
                            </div>
                        </article>
                        <BigPlayButton position="center" />
                        <ProgressControl/>
                        <ControlBar disableCompletely={true}/>
                    </Player>

                </article>
                <article className="commentaire">
                    <div className="Com"></div>
                    <div className="Playlist">
                        {DataEpisodes}
                    </div>
                </article>
            </section>
        </div>;
    }
}