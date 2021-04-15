import React from 'react'
import Band from './Band'

const Bands = props => {
    const allBands = props.bands.map(band => 
        <Band 
        key={band.id} {...band} deleteBand={props.deleteBand}/>)

    return (
        <div>
        {allBands}
        </div>
    )
}

export default Bands