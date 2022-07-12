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
    )
}

export default MyProjects
