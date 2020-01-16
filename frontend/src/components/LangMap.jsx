import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet';
import '../leaflet/leaflet.css';
//import { LatLng } from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

class LangMap extends React.Component {
  constructor() {
    super()
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 13,
      users: []
    }
    this.position = [this.state.lat, this.state.lng];
  }

  componentDidMount() {
    fetch("http://localhost:9000/langs")
      .then(res => res.text())
      .then(users => console.log(users))
      .catch(e => console.log(e));
    // load marker json
        //.then(data => this.setState({ markers: data.items.map(v => new LatLng(v.lat, v.lng)) }));
  }

  render() {
    return (
      <Map center={this.position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={this.position}>
          <Popup>
            A pretty CSS3 popup. <br/> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    );
  }
}

export default LangMap;