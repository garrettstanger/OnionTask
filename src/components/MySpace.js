
import { db } from './firebase';
import {collection, addDoc, setDoc } from 'firebase/firestore'
import './MySpace.scss' 
import React, { useState, useReducer } from 'react';
import { v4 as uuid } from 'uuid';

// This part of mySpace was created by using a hook from React called useReducer. 
const initalNoteState ={

    lastNoteCreated: null,
    totalNotes: 0,
    notes: [],
};
// As we may see notesReducer is create and is populated by states of in this case the notes. It is better used when using a swtch 
// statement since there are two actions we have right now which is delete note and add note. 
const notesReducer = (prevState,action) =>{
    switch(action.type){
        case 'ADD_NOTE':{
            const newState = {
                lastNoteCreated: new Date().toTimeString().slice(0,8),
                totalNotes: prevState.notes.length + 1,
                notes: [...prevState.notes, action.payload]
            };

            console.log('After ADD_NOTE: ', newState);
            return newState;

        }
        case 'DELETE_NOTE':{
            const newState = {
                ...prevState,
                notes: prevState.notes.filter(note => note.id !== action.payload.id),
                totalNotes: prevState.notes.length - 1,
            };
            console.log('After DELETE_NOTE: ', newState);
            return newState;
        }
            
    }
};
// this is the "main" function where all the other constants are called in order to add the note or delete it. 
function MySpace(){
    const [noteInput, setNoteInput] = useState('');
    const [noteState, dispatch] = useReducer(notesReducer, initalNoteState);
    // This constant is to add the note to Firebase. (Still a work in progress)
    const projectsCollectionRef = collection(db, 'Notes')


    const addNote = event => {
        event.preventDefault();
        // Checks so no empty notes are added. 
        if (!noteInput){
            return;
        }
        // Each note has an id, text and a rotate option which helps gives some variety on how the note looks when being displayed. 
        const newNote ={
            id: uuid(),
            text: noteInput,
            rotate: Math.floor(Math.random() * 20),
        };
        dispatch({type: 'ADD_NOTE', payload: newNote});
        setNoteInput('');
    };
    // These two following options are for the to drag the note and putting it in any part of the screen and dropping it. 
    const dropNote = event => {
        event.target.style.left = `${event.pageX - 50}px`;
        event.target.style.top = `${event.pageY - 50}px`;
    };
    const dragOver = event => {
        event.stopPropagation();
        event.preventDefault();
    }

    // This is what the app return, in here we find the text area and the all the componets coming together, also 
    //  this is where add note and delete note are called. 
    return(
        <div className="app" onDragOver={dragOver}>
            <h1>
                My Notes ({ noteState.totalNotes})
                <span>{noteState.notes.length ? `Last note created: ${noteState.lastNoteCreated}` : ' '}</span>
            </h1>
        <form onSubmit = {addNote} className = "note-form">
            <textarea value = {noteInput}
             onChange = {event => setNoteInput(event.target.value)}
             placeholder = "Create a new note..."></textarea>
            <button>Add Note</button> 
        </form>
        
        {noteState
          .notes
          .map(note => (
            <div className = "note"
                style = {{transform: `rotate(${note.rotate}deg)`}}
                draggable = "true"
                onDragEnd={dropNote}
                key = {note.id}>
                
                <div onClick={() => dispatch({ type: 'DELETE_NOTE', payload: note })}
                    className="close">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                </div>
                <pre className="text"> {note.text} </pre>
            
            </div>
          ))
        }

        </div>
    );
}
export default MySpace