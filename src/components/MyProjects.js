import React from 'react';

import {useContext} from 'react'
import { ContentContext } from './ContentContext'
import './Menu.css'


function MyProjects(props) {
    const {content, setContent} = useContext(ContentContext)
    // const [children, setChildren] = useState([])

    const chooseProject = (project) => {
        props.setProject(project);

        setContent('project');
    }


   






   




    return (
        <>
            {props.projects.map((project) => {
                return (
                    <li key={project.id} onClick={() => chooseProject(project)}> 
                        <span className="material-symbols-rounded">folder</span>{project.title} 
    
                    </li>
                )
            })}
          
        </>            
            /* <li onClick={() => setContent('project')}>&nbsp;&nbsp;&nbsp;&nbsp;<span class="material-symbols-rounded">description</span>Front-end</li>
            <li>&nbsp;&nbsp;&nbsp;&nbsp;<span class="material-symbols-rounded">description</span>Back-end</li>
            <li>&nbsp;&nbsp;&nbsp;&nbsp;<span class="material-symbols-rounded">description</span>Marketing</li> */
        
    )
}

export default MyProjects
