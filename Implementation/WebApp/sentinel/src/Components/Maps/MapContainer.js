import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends React.Component {
    render() {
        return (
            <Map google = { this.props.google } zoom = { 14 }>

                <Marker onClick = { this.onMarkerClick }
                        name = { 'Current location' } />

                <InfoWindow onClose={this.onInfoWindowClose}>
                    <div>
                        <h1>{ }</h1>
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}

/*
export default GoogleApiWrapper({
    apiKey: ("AIzaSyA_Vpdjo0SdI-cHrISpAhnlmiSoP_tvMKg")
})
(MapContainer)
*/

export default GoogleApiWrapper(
    (props) => ({
        apiKey: "AIzaSyA_Vpdjo0SdI-cHrISpAhnlmiSoP_tvMKg",
        language: props.language,
    })
)
(MapContainer)
