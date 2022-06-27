import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './Navbar'; 
import Menu from './Menu'
import Content from './Content';
import { ContentContext } from './ContentContext';
import {db} from './firebase'
import { collection, getDocs, getDoc, doc } from 'firebase/firestore'

let public_id = "Ronald_1893"

function App() {
  const [content, setContent] = useState('dashboard')

  // Get the Projects Collection
  const [projects, setProjects] = useState([]);

  // Get the Tasks Collection
  const [tasks, setTasks] = useState([]);
  const tasksCollectionRef = collection(db, 'Tasks')

  useEffect(() => {
    const getProjects = async () => {

      // Getting user's document from public ID
      const search = await getDoc(doc(db,'PublicUserID',public_id))
      const User = await getDoc(
        doc(db,'Users',search.data()['private_reference']))
      const userProjectsRefs = await User.get('Projects')

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

  useEffect(() => {
    const getTasks = async () => {
      const data = await getDocs(tasksCollectionRef);
      setTasks(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }

    getTasks();
  }, [])

  return (
    <>
    <ContentContext.Provider value={{content, setContent}}>
      <Navbar name = {public_id}/>
 
      <Menu projects = {projects}/>
      <Content projects = {projects} tasks = {tasks}/>
      
     
    </ContentContext.Provider>
    </>
  );
}


export default App;
