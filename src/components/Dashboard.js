import React, { useEffect, useState } from 'react';
import './Dashboard.css';

import Recent from './Recent';




function Dashboard(props) {




    return (        
        <div id="recent_section">
            <h2>Recent</h2>
            {props.projects.map((project) => {
                return(
                    <Recent key={project.id} projectInfo = {project} />
                )
            })}
        </div>
                
       
    )
}


export default Dashboard
