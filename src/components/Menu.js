import './Menu.css';
import { useContext } from 'react'
import { ContentContext } from './ContentContext';
import MyProjects from './MyProjects';

function Menu(props) {
    const {content, setContent} = useContext(ContentContext)
    return(
      <div id="overview">
            
              <ul>
                  <li><span className="material-symbols-rounded">
                      dashboard
                      </span><a onClick={() => setContent('dashboard')}>Dashboard</a></li>
                  <li><span className="material-symbols-rounded">
                      edit
                      </span><a onClick={() => setContent('newProject')}>Create new project</a></li>
                  <li><span className="material-symbols-rounded">
                      calendar_today
                      </span><a onClick={() => setContent('calendar')}>Calendar</a></li>
                  <li><span className="material-symbols-rounded">
                      notifications
                      </span>Reminders</li>
                  <li><span className="material-symbols-rounded">
                      pages
                      </span><a onClick={() => setContent('MySpace')}>MySpace</a></li>
              </ul>
  
              <div id="display_tree">
                
                  <ul>
                  <h3>Projects</h3>
                      <MyProjects projects = {props.projects} tasks = {props.tasks}/>
                  </ul>
                  
              </div>
          </div>
    )
}


export default Menu