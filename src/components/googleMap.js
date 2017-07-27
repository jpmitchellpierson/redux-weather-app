import React, { Component } from 'react';

class GoogleMap extends Component {
  // component lifecycle method gets called 
  // automatically after this component is rendered
  componentDidMount() {
    // google.maps.Map --> creates embedded map inside of document
    // gets embedded to first argument div created in render f(x)
    new google.maps.Map(this.refs.map, {
      // second argument is options object
      zoom: 12,
      center: { 
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }
  
  render() {
    return <div ref="map" />
  }
}

export default GoogleMap;