import './Menu.css';
import { useContext } from 'react'
import { ContentContext } from './ContentContext';
import MyProjects from './MyProjects';

function Menu(props) {
    const {content, setContent} = useContext(ContentContext)
    return(
      <div id="overview">
            
              <ul>
                  <li><span class="material-symbols-rounded">
                      dashboard
                      </span><a onClick={() => setContent('dashboard')}>Dashboard</a></li>
                  <li><span class="material-symbols-rounded">
                      edit
                      </span><a onClick={() => setContent('newProject')}>Create new project</a></li>
                  <li><span class="material-symbols-rounded">
                      calendar_today
                      </span><a onClick={() => setContent('calendar')}>Calendar</a></li>
                  <li><span class="material-symbols-rounded">
                      notifications
                      </span>Reminders</li>
                  <li><span class="material-symbols-rounded">
                      pages
                      </span><a href="myspace.html">My space</a></li>
                  
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