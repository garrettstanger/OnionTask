import React, {useEffect, useState} from 'react'
import profilePic from './profile_pic_1.jpg'
import './Displayproject.css'
import {getDoc} from 'firebase/firestore';


const dateStyle = {
    backgroundColor: 'rgb(226, 255, 197)',
    color: 'rgb(64, 110, 18)',
}
function Displayproject(props) {


    const [projects, setProjects] = useState([])
    const promiseTasks = props.project.Tasks.map( async ref => {
        const Doc = getDoc(ref)
        return Doc
    });
    // Promise.all(promiseTasks)

    useEffect(() => {
        Promise.all(promiseTasks).then(Docs => {
            console.log(Docs.map((Doc) => ({...Doc.data(), id: Doc.id })))
            console.log('hiiii')
            setProjects(Docs.map((Doc) => ({...Doc.data(), id: Doc.id })))
            }
           
            
        
        )
    },[])

   
   
    

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

            
            <div id="assigned">
                <div className="task_group">
                    <p>In progress</p>
                    <p className="task_number">1</p>
                </div>
                
            </div>

            <div id="done">

                <div className="task_group">
                    <p>Done</p>
                    <p className="task_number">2</p>
                </div>

                {projects.map((project) => {
                return (
                    <div className="tasks">
                    <p>{project.description}</p>
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
            })}







            </div>
            {/* <div id="done">
                <div className="task_group">
                    <p>Done</p>
                    <p className="task_number">0</p>
                </div>

                
            </div> */}
        </> 
        
    )
}

export default Displayproject
