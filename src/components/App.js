import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './Navbar'; 
import Menu from './Menu'
import Content from './Content';
import { ContentContext } from './ContentContext';
import {db} from './firebase'
import { collection, doc, getDocs } from 'firebase/firestore'
import Calendar from './Calendar';



let user = "Ronald"


function App() {
  const [content, setContent] = useState('dashboard')

  // Get the Projects Collection
  const [projects, setProjects] = useState([]);
  const projectsCollectionRef = collection(db, 'Projects')

  // Get the Tasks Collection
  const [tasks, setTasks] = useState([]);
  const tasksCollectionRef = collection(db, 'Tasks')

  useEffect(() => {
    const getProjects = async () => {
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
      <Navbar name = {user}/>
 
      <Menu projects = {projects} tasks = {tasks}/>
      <Content projects = {projects} tasks = {tasks}/>
      
     
    </ContentContext.Provider>
    </>
  );
}


export default App;
