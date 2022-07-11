import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './Navbar'; 
import Menu from './Menu'
import Content from './Content';
import { ContentContext } from './ContentContext';
import {db} from './firebase'
import { getDoc, doc } from 'firebase/firestore'


let public_id = "Ronald_1893"

function App() {
  const [content, setContent] = useState('dashboard')

  // Get the Projects Collection
  const [projects, setProjects] = useState([]);
  const [currentProject, setProject] = useState([])
  const [currentUser, setCurrentUser] = useState([])

  useEffect(() => {
    const getProjects = async () => {

      // Getting user's document from public ID
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
 
      <ContentContext.Provider value={{content, setContent}}>
        <Navbar name = {public_id}/>
  
        <Menu projects = {projects} setProject = {setProject}/>
        <Content 
        projects = {projects}
        currentProject = {currentProject}
        currentUser = {currentUser}/>
        
      
      </ContentContext.Provider>

  );
}


export default App;
