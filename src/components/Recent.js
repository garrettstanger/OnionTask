
import { ContentContext } from './ContentContext'
import { useContext } from 'react'


function Recent(props) {
    const {content, setContent} = useContext(ContentContext)

    return (
        <div class="recent">
        <a onClick={ () => setContent('project') }>
            <span class="project1_link"><p>{props.projectInfo.title}</p></span>
        
        <p class="project_description"></p>
        
        </a>
    </div>  
    )
}

export default Recent
