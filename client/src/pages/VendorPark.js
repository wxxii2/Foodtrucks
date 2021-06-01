import React from 'react'

import Header from '../components/Header.js';
import LeafletMap from '../components/LeafletMap.js';

export default function VendorPark(props) {
    // Send required information for vendor to park
    return (
        <div>
            <Header 
                id={props.location.state.vendor.id}
                vendor={props.location.state.vendor}/>
            <LeafletMap
                center={props.location.state.position}
                vendor={props.location.state.vendor}
                vendors={[]} />
        </div>
    )
}
