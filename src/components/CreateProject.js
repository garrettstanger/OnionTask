import React, { useState, useContext } from 'react'
import { db } from './firebase';
import { ContentContext} from './ContentContext'
import { collection, addDoc, getDoc, updateDoc, Timestamp, arrayUnion } from 'firebase/firestore'
import './CreateProject.css';


function CreateProject(props) {
    const {content, setContent} = useContext(ContentContext)

    const getAndSetProject = async (Project) => {
        const unpacked = {...Project.data(), id : Project.id}
        props.setProject(unpacked)
        setContent('project')    
    }
    
    // Bringing in the users information for connection
    const [userRef, userID] = props.currentUser;
    const [newTitle, setTitle] = useState('');
    const [newDate, setDate] = useState('');
    const [newDescription, setDescription] = useState('');
    const projectsCollectionRef = collection(db, 'Projects');
    // Event for connecting and adding the users input to the correct locations in the database.
    const AddProject = async (event) => {
        const projectRef = await addDoc(projectsCollectionRef, {title : newTitle, date : newDate, description : newDescription, Users : [userID]}) 
        console.log(projectRef);
        updateDoc(userRef, {Projects : arrayUnion({location : projectRef, last_interaction : newDate})})
        return await getDoc(projectRef)
    } 


 // User enters data to submit to the database and the AddProject runs the event to connect to the db
    return (
        <div id='create_project'>
            <div id='create_project_title'>Create New Project</div>
            <input type='text' placeholder='Project Name...' onChange={(event) => {event.preventDefault(); setTitle(event.target.value) }}></input><br></br><br></br>
            <input type='date' onChange={(event) => {setDate(Timestamp.fromDate(new Date(event.target.value))); event.preventDefault()}}></input><br></br><br></br>
            <input type='text' placeholder='Project Description...' onChange={(event) => {setDescription(event.target.value); event.preventDefault()}}></input><br></br><br></br>
            <button onClick={() => getAndSetProject(AddProject())} >Create Project</button><br></br>
        </div>
        
    )
}

export default CreateProject
