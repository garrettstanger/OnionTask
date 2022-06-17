
import { ContentContext } from './ContentContext'
import { useContext } from 'react'


function Recent(props) {
    const {content, setContent} = useContext(ContentContext)

    return (
        <div className="recent">
        <a onClick={ () => setContent('project') }>
            <span className="project1_link"><p>{props.projectInfo.title}</p></span>
        
        <p className="project_description"></p>
        
        </a>
    </div>  
    )
}

export default Recent
