// import Component from 'react'
import React from 'react'
import './DragNav.css';
import { MapInteractionCSS } from 'react-map-interaction';

// Use MapInteraction if you want to determine how to use the resulting translation.
function DragNav(props) {
    console.log(props.component)
    return (
        <div>
            <MapInteractionCSS  className="mapWrap">
                <> 
                {props.component}
                </>
            </MapInteractionCSS>
        </div>
      );
    }
export default DragNav;