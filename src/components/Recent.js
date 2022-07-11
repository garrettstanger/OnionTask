
import { ContentContext } from './ContentContext'
import { useContext, useEffect } from 'react'


function Recent(props) {
    const {content, setContent} = useContext(ContentContext)


    const chooseProject = (project) => {
        props.setProject(project);

        setContent('project');
    }
    // useEffect(() => {
    //     const getTasks = async () => {
    //       const data = await getDocs(tasksCollectionRef);
    //       setTasks(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    //     }
    
    //     getTasks();
    //   }, [])
    return (
        <div className="recent">
        <a onClick={ () => chooseProject(props.projectInfo)}>
            <span className="project1_link"><p>{props.projectInfo.title}</p></span>
        
        <p className="project_description"></p>
        
        </a>
    </div>  
    )
}

export default Recent
