// This compoenent will display the project that is being selected from the Menu and Dashboard components
// Props are being passed through App -> Content -> Displayproject (currentProject)




import React, {useEffect, useState} from 'react'
import profilePic from './profile_pic_1.jpg'
import './Displayproject.css'
import {getDoc} from 'firebase/firestore';


const dateStyle = {
    backgroundColor: 'rgb(226, 255, 197)',
    color: 'rgb(64, 110, 18)',
}
function Displayproject(props) {


    const [tasks, setTasks] = useState([])
    if (props.project.Tasks !== undefined) {
        var promiseTasks = props.project.Tasks.map( async ref => {
            const Doc = getDoc(ref)
            return Doc
        });
    }


    const fillTasks = (projectTasks,category) => {

        if (projectTasks !== undefined) {
            return (
                projectTasks.map((task) => {
                    if(task.category === category) {
                        return (
                            <div className="tasks" key={task.id}>
                            <p>{task.description}</p>
                            <div className="date" style={dateStyle}>
                                <p>
                                    <span className="material-symbols-rounded">
                                        schedule
                                    </span>
                                    June 10
                                </p>
                            </div>
                            <div className="priority"><p>● Important</p></div>
                            <div className="colab_pic_task">
                                
                                <img src={profilePic}/>
                                <img src={profilePic}/>
                                <img src={profilePic}/>
                                
                            </div>
                        </div>
                        )
                    }
                })
            )
        }
    }

    // This hook prevents multiple requests from the database. Change it at your own risk
    useEffect(() => {
        (props.project.Tasks)
        
        Promise.all(promiseTasks).then(Docs => {
            setTasks(Docs.map((Doc) => ({...Doc.data(), id: Doc.id })))
        }).catch(err => {
            console.log('Could not find tasks for this project.')
            setTasks(undefined)}
        )
        


    },[props.project])

   
   
    

    return (
        <>
            <div id="project_info">
                <h2>{props.project.title}</h2>

                <div id="colaborators">
        
                    <div id="colab_pic">
                            
                        <img src={profilePic}/>
                        <img src={profilePic}/>
                        <img src={profilePic}/>
                            
                    </div>
                </div>

                <div id="announcements">
                    <h3>
                        <span className="material-symbols-rounded">
                            campaign
                        </span>Description
                    </h3>
                    <p>{props.project.title}</p>
                        
                </div> 
            </div>

            {/* In progress section */}
            <div id="in_progress">
                <div className="task_group">
                    <p>In progress</p>
                    <p  onClick={() => console.log('buttom pressed')} className="task_number">+</p>
                </div>
                
                {fillTasks(tasks,'In progress')}

            {/* Done Section  */}
            </div>

            <div id="done">

                <div className="task_group">
                    <p>Done</p>
                    <p className="task_number">2</p>
                </div>

                {fillTasks(tasks,'Done')}

            </div>  
        </>
    )
}

export default Displayproject
