import React from 'react'
import profilePic from './profile_pic_1.jpg'
import './Displayproject.css'


const dateStyle = {
    backgroundColor: 'rgb(226, 255, 197)',
    color: 'rgb(64, 110, 18)',
}
function Displayproject(props) {
    return (
        <>
            <div id="project_info">
                <h2>{props.tasks[1].title}</h2>

                <div id="colaborators">
        
                    <div id="colab_pic">
                            
                        <img src={profilePic}/>
                        <img src={profilePic}/>
                        <img src={profilePic}/>
                            
                    </div>
                </div>

                <div id="announcements">
                    <h3>
                        <span class="material-symbols-rounded">
                            campaign
                        </span>Description
                    </h3>
                    <p>{props.tasks[0].description}</p>
                        
                </div> 
            </div>

            
            <div id="assigned">
                <div class="task_group">
                    <p>In progress</p>
                    <p class="task_number">1</p>
                </div>
                
                {props.tasks.map((task) => {
                    const t = task.fields
                    
                    
                })}
            
            </div>

            <div id="in_progress">

                <div class="task_group">
                    <p>Done</p>
                    <p class="task_number">2</p>
                </div>

                <div class="tasks">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus, nisi quis blandit porta, urna nunc tristique urna, ut consectetur quam metus ut libero. </p>
                    <div class="date" style={dateStyle}>
                        <p>
                            <span class="material-symbols-rounded">
                                schedule
                            </span>
                            June 10
                        </p>
                    </div>
                    <div class="priority"><p>● Important</p></div>
                    <div class="colab_pic_task">
                        
                        <img src={profilePic}/>
                        <img src={profilePic}/>
                        <img src={profilePic}/>
                        
                    </div>
                </div>

                <div class="tasks">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus, nisi quis blandit porta, urna nunc tristique urna, ut consectetur quam metus ut libero. </p>
                    <div class="date"style={dateStyle}>
                        <p>
                            <span class="material-symbols-rounded">
                                schedule
                            </span>
                            June 16
                        </p>
                    </div>
                    <div class="priority"><p>● Mid-level</p></div>
                    <div class="colab_pic_task">
                        
                        <img src={profilePic}/>
                        <img src={profilePic}/>
                        <img src={profilePic}/>
                        
                    </div>
                </div>

                                
            </div>
            {/* <div id="done">
                <div class="task_group">
                    <p>Done</p>
                    <p class="task_number">0</p>
                </div>

                
            </div> */}
        </> 
        
    )
}

export default Displayproject
