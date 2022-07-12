// import Component from 'react'
import React from 'react'
import './DragNav.css';
import { MapInteractionCSS } from 'react-map-interaction';

// Use MapInteraction if you want to determine how to use the resulting translation.
function DragNav(props) {
    if (props.content === 'project') {
    console.log(props.component)
    return (
        <div style={{height:"100vh"}}>
            <MapInteractionCSS  className="mapWrap">
                <> 
                {props.component}
                </>
            </MapInteractionCSS>
        </div>
      );
    }
    else {
        return (
            <div>
                {props.component}
            </div>
          );
    }
}
export default DragNav;