import React, { useContext } from 'react';
import './Content.css';
import { ContentContext } from './ContentContext';
import CreateProject from './CreateProject';
import Dashboard from './Dashboard';
import Displayproject from './Displayproject';
import Calendar from './Calendar';

function Content(props) {
    const {content, setContent} = useContext(ContentContext)
    let display;

    if (content === 'dashboard') {
        display = <Dashboard projects = {props.projects} />;
    } else if (content === 'project') {
        display = <Displayproject projects = {props.projects} tasks = {props.tasks}/>;
    } else if (content === 'newProject') {
        display = <CreateProject />
    } else if (content === 'calendar') {
        display = <Calendar />
    }
   
    return (
        <div id='content'>
        
            {display}
            
        </div>
    )
}

export default Content
