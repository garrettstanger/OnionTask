import React from 'react';

import {useContext} from 'react'
import { ContentContext } from './ContentContext'
import './Menu.css'

function MyProjects(props) {
    const {content, setContent} = useContext(ContentContext)

    return (
        <>
            {props.projects.map((project) => {
                return (
                    <a href={project.id}><li key={project.id} onClick={() => setContent('project',project)}><span className="material-symbols-rounded">folder</span>{project.title} <div className='project_id'> {project.id} </div> </li></a>
                )
            })}
          
        </>            
            /* <li onClick={() => setContent('project')}>&nbsp;&nbsp;&nbsp;&nbsp;<span class="material-symbols-rounded">description</span>Front-end</li>
            <li>&nbsp;&nbsp;&nbsp;&nbsp;<span class="material-symbols-rounded">description</span>Back-end</li>
            <li>&nbsp;&nbsp;&nbsp;&nbsp;<span class="material-symbols-rounded">description</span>Marketing</li> */
        
    )
}

export default MyProjects
