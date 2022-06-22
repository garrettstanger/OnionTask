import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './Navbar'; 
import Menu from './Menu'
import Content from './Content';
import { ContentContext } from './ContentContext';
import {db} from './firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'




let public_id = "Ronald_1893"




function App() {
  const [content, setContent] = useState('dashboard')

  // Get the Projects Collection
  const [projects, setProjects] = useState([]);

  // const getPrivateID = async ()
  // 
  var private_id = 'Well'
  const idRef = query(
    collection(db,'Users'),
    where('public_id','==',public_id))
  
  getDocs(idRef).then(querySnapshot => {
    const queryDocumentSnapshot = querySnapshot.docs[0];
    private_id = queryDocumentSnapshot.id;
  })

  const projectsCollectionRef = query(
    collection(db, 'Projects/'),
    where('Users','array-contains',private_id))

  // Get the Tasks Collection
  const [tasks, setTasks] = useState([]);
  const tasksCollectionRef = collection(db, 'Tasks')

  useEffect(() => {
    const getProjects = async () => {
      console.log(private_id) // Still says 'Well' for some reason
      const data = await getDocs(projectsCollectionRef);
      setProjects(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
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
 
      <Menu projects = {projects} tasks = {tasks}/>
      <Content projects = {projects} tasks = {tasks}/>
      
     
    </ContentContext.Provider>
    </>
  );
}


export default App;
