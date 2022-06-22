import { async } from '@firebase/util'
import React, { useState } from 'react'
import { db } from './firebase';
import {collection, addDoc } from 'firebase/firestore'
import './CreateProject.css';



function CreateProject() {
    const [newTitle, setTitle] = useState('');
    const projectsCollectionRef = collection(db, 'Projects')
    const addProject = async () => {
    await addDoc(projectsCollectionRef, {title: newTitle} )
    }

    return (
        <div id='create_project'>
        <input type='text' placeholder='Project Name...' onChange={(event) => {setTitle(event.target.value)}}></input>

        <button onClick={addProject}>Create Project</button>
        </div>
    )
}

export default CreateProject
