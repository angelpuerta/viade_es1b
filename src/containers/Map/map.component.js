import React from 'react';
import L from 'leaflet';
import {TileLayer, Marker, Polyline, Popup } from 'react-leaflet';
import Rutas from './routes/rutas';
import { Button } from 'reactstrap';
import ReactDOM from 'react-dom';
import {MapStyle} from './map.style';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

class Map extends React.Component {

  constructor() {
    super();
    this.name = Rutas.getNames()[0];
    this.puntos = []
    Rutas.getRutaByPosition(1).points.map(p => this.puntos.push(p.getCoordinates()));
  }

  changeName(id, e) {
    var newRuta = Rutas.getRutaByName(id);
    document.getElementById("name").textContent = newRuta.name;

    this.puntos = newRuta.point;
    const position = this.puntos[0];

    var update = <MapStyle id="map" center={position} zoom={15} >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Polyline color={'red'} positions={this.puntos}></Polyline>
      <Marker position={this.puntos[0]}>
        <Popup>Inicio</Popup>
      </Marker>
      <Marker position={this.puntos[this.puntos.length - 1]}>
        <Popup>Fin</Popup>
      </Marker>
    </MapStyle>;

    ReactDOM.render(update, document.getElementById('map'));
  }

  render() {
    const position = this.puntos[0];

    const divStyle = {
      position: 'absolute',
      width: '100%',
      height: '100%',
      zIndex: '1',
    };

    const divStyle2 = {
      backgroundColor: '#FFFFFF',
      marginRight: '10%',
      width: '50%',
      height: 'auto',
      position: 'absolute',
      left: '75%',
      zIndex: '99',
      
    }

    return (
      <React.Fragment id = "map" >
        <div id="map" style={divStyle}>
          <MapStyle  id="map" center={position} zoom={15}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Polyline color={'red'} positions={this.puntos}></Polyline>
            <Marker position={this.puntos[0]}>
              <Popup>Inicio</Popup>
            </Marker>
            <Marker position={this.puntos[this.puntos.length - 1]}>
              <Popup>Fin</Popup>
            </Marker>
          </MapStyle>
        </div>
        <div style={divStyle2}>
        <h2 id="name">{this.name}</h2>
        <ul>{Rutas.getNames().map((n, i) => <li key={i} onClick={(e) => this.changeName(n, e)}> {n} </li>)}</ul>
        </div>
      </React.Fragment>
    );
  }
}

export default Map;