import { async } from '@firebase/util'
import React, { useState } from 'react'
import { db } from './firebase';
import { collection, addDoc, updateDoc, doc, arrayUnion } from 'firebase/firestore'
import './CreateProject.css';

function CreateProject(props) {
    const [userRef, userID] = props.getCurrentUser();
    console.log(userRef);
    const [newTitle, setTitle] = useState('');
    const [newDate, setDate] = useState('');
    const [newDescription, setDescription] = useState('');
    const projectsCollectionRef = collection(db, 'Projects');
    
    const addProject = async (event) => {
    await addDoc(projectsCollectionRef, {title : newTitle, date : newDate, description : newDescription, Users : userID})
    
    addProject().then(projectID => {
            const projectRef = {'location' : projectID, 'last_interaction' : "today"}
            updateDoc(userRef, {
                Projects : arrayUnion(projectRef)
            })

        })
        event.preventDefault();
    } 
    


    return (
        <div id='create_project'>
            <div id='create_project_title'>Create New Project</div>
            <input type='text' placeholder='Project Name...' onChange={(event) => {setTitle(event.target.value)}}></input><br></br><br></br>
            <input type='date' onChange={(event) => {setDate(event.target.value)}}></input><br></br><br></br>
            <input type='text' placeholder='Project Desciption...' onChange={(event) => {setDescription(event.target.value)}}></input><br></br><br></br>
            <button onClick={addProject}>Create Project</button><br></br>
        </div>
        
    )
}

export default CreateProject
