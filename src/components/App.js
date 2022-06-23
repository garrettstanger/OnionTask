import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './Navbar'; 
import Menu from './Menu'
import Content from './Content';
import { ContentContext } from './ContentContext';
import {db} from './firebase'
import { collection, getDocs, getDoc, doc } from 'firebase/firestore'

let public_id = "dbenjamy"

function App() {
  const [content, setContent] = useState('dashboard')

  // Get the Projects Collection
  const [projects, setProjects] = useState([]);

  // Get the Tasks Collection
  const [tasks, setTasks] = useState([]);
  const tasksCollectionRef = collection(db, 'Tasks')

  useEffect(() => {
    const getProjects = async () => {
      
      const search = await getDoc(doc(db,'PublicUserID',public_id))
      const User = await getDoc(
        doc(db,'Users',search.data()['private_reference']))

      const userProjectsRef = await User.get('Projects')

      const promise = userProjectsRef.map( async ref => {
        const Doc = getDoc(doc(db,'Projects',ref))
        return Doc
          // console.log(Doc.data())})
      });
      
      Promise.all(promise).then(Doc => {
      setProjects(Doc.map((doc) => ({...doc.data(), id: doc.id })))})
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
      <Content projects = {projects}/>
      
     
    </ContentContext.Provider>
    </>
  );
}


export default App;
