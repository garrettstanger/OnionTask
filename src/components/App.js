import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './Navbar'; 
import Menu from './Menu'
import Content from './Content';
import { ContentContext } from './ContentContext';
import {db} from './firebase'
import { getDoc, doc } from 'firebase/firestore'
import DragNav from './DragNav'

// The current user. In the future this would be changed to use firestore 
// authorization.
let public_id = "Ronald_1893"

function App() {
  // 'content' is used to let other components know the state
  const [content, setContent] = useState('dashboard')

  // 'currentUser' is used to get documents for the user and associate any
  // changes or created documents with the user
  const [currentUser, setCurrentUser] = useState([])
  // 'projects' is used to show current user's projects
  const [projects, setProjects] = useState([]);
  // 'currentProject' is used to load the one they select
  const [currentProject, setProject] = useState([])

  useEffect(() => {
    const getProjects = async () => {

      // Getting user's document from public ID. In the future public ID will be
      // used to let users search for each other.
      const search = await getDoc(doc(db,'PublicUserID',public_id))
      const userRef = doc(db,'Users',search.data()['private_reference'])
      const User = await getDoc(userRef)
      const userProjectsRefs = await User.get('Projects')
      setCurrentUser([userRef, User.id])

      // Promising each project from the user
      const promise = userProjectsRefs.map( async ref => {
        const Doc = getDoc(ref['location'])
        return Doc
      });
      
      // Wait for all to resolve and then using it in setProjects()
      Promise.all(promise).then(Docs => {
      setProjects(Docs.map((doc) => ({...doc.data(), id: doc.id })))})
    }

    getProjects();
  }, [])

  return (
      // Returning the web page with all nested comonents
      <ContentContext.Provider value={{content, setContent}}>
        <Navbar name = {public_id}/>
  
        <Menu projects = {projects} setProject = {setProject}/>
        <DragNav component = {
          <Content 
          projects = {projects}
          setProject = {setProject}
          currentProject = {currentProject}
          currentUser = {currentUser}/>}
          content = {content}/>
        
      
      </ContentContext.Provider>

  );
}


export default App;
