import React, { useContext } from 'react';
import './Content.css';
import { ContentContext } from './ContentContext';
import CreateProject from './CreateProject';
import Dashboard from './Dashboard';
import Displayproject from './Displayproject';
import Calendar from './Calendar';
import MySpace from './MySpace';


function Content(props) {
    const {content, setContent} = useContext(ContentContext)
    let display;

    if (content === 'dashboard') {
        display = <Dashboard projects = {props.projects} 
        setProject ={props.setProject} />;
    } else if (content === 'project') {
        display = <Displayproject project = {props.currentProject}/>;
    } else if (content === 'newProject') {
        display = <CreateProject currentUser = {props.currentUser}/>
    } else if (content === 'calendar') {
        display = <Calendar />
    } else if (content === 'MySpace'){
        display = <MySpace />
    }
   
    return (
        <div id='content'>
        
            {display}
            
        </div>
    )
}

export default Content
