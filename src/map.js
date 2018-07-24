import React, { Component } from 'react';
import Map from 'google-map-react';
import marker from './images/pin.svg';

import mapStyles from './mapStyles';

const Marker = () => <img className="marker" src={marker}/>;

const mapOptions = {
    styles: mapStyles, // straight out of something like snazzymaps
    draggable: false
};

export class SimpleMap extends Component {

    render() {
        return (
            <div style={{ height: '250px', width: '100%' }}>
                <Map
                    bootstrapURLKeys={{ key: "AIzaSyBhL9PTQAbnM6A_0p6LU7WRuk_d45dJYnU" }}
                    defaultCenter={{lat: this.props.lat, lng: this.props.lng}}
                    defaultZoom={4}
                    options={mapOptions}
                >
                    <Marker
                        title={this.props.nom}
                        name={this.props.nom}
                        position={{lat: this.props.lat, lng: this.props.lng}} />
                </Map>
            </div>
        );
    }
}