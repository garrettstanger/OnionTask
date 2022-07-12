import { async } from '@firebase/util'
import React, { useEffect, useState } from 'react'
import { db } from './firebase';
import { collection, addDoc, updateDoc, doc, arrayUnion } from 'firebase/firestore'
import './CreateProject.css';

function CreateProject(props) {
    const [userRef, userID] = props.currentUser;
    const [newTitle, setTitle] = useState('');
    const [newDate, setDate] = useState('');
    const [newDescription, setDescription] = useState('');
    const projectsCollectionRef = collection(db, 'Projects');
    const AddProject = async (event) => {
        const projectRef = await addDoc(projectsCollectionRef, {title : newTitle, date : newDate, description : newDescription, Users : [userID]}) 
        console.log(projectRef);
        updateDoc(userRef, {Projects : arrayUnion({location : projectRef, last_interaction : newDate})})
    } 



    return (
        <div id='create_project'>
            <div id='create_project_title'>Create New Project</div>
            <input type='text' placeholder='Project Name...' onChange={(event) => {event.preventDefault(); setTitle(event.target.value) }}></input><br></br><br></br>
            <input type='date' onChange={(event) => {setDate(event.target.value); event.preventDefault()}}></input><br></br><br></br>
            <input type='text' placeholder='Project Description...' onChange={(event) => {setDescription(event.target.value); event.preventDefault()}}></input><br></br><br></br>
            <button onClick={() => AddProject()}>Create Project</button><br></br>
        </div>
        
    )
}

export default CreateProject
