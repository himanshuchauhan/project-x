import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import { MapWrapper, Pointer, Point, Label } from './StyledComponents';


const Round = props => (
  <Pointer>
    <Point {...props}>
      <Label>{props.label}</Label>
    </Point>
  </Pointer>
  );


export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: { lat: 28.524668, lng: 77.220212 },
      marker: { lat: 28.4595, lng: 77.0266 },
    };
    setInterval(() => {
      this.move();
    }, 2000);
    setInterval(() => {
      this.moveBack();
    }, 3500);
  }

  move() {
    this.setState({
      center: { lat: 28.65986, lng: 77.49618 },
      marker: { lat: 28.65986, lng: 77.49618 },
    });
  }
  moveBack() {
    this.setState({
      center: { lat: 28.524668, lng: 77.220212 },
      marker: { lat: 28.4595, lng: 77.0266 },
    });
  }

  render() {
    return (
      <MapWrapper>
        <GoogleMap
          center={this.state.center}
          zoom={11}
        >

          <Round lat={this.state.marker.lat} lng={this.state.marker.lng} red label="A" />
          <Round lat={28.534476} lng={77.375088} red label="B" />
          <Round lat={28.613732} lng={77.230893} label="C" />

          <Round lat={28.3732} lng={77.2893} label="D" />

        </GoogleMap>
      </MapWrapper>

    );
  }
}
