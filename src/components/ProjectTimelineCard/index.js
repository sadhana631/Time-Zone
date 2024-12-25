import {AiFillCalender} from 'react-icons/ai'


const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {imageUrl, projectTitle, description, projectUrl, duration} =
    projectDetails

  return (
    <div>
     <img src={imageUrl} alt="project" />
     <div>
      <h1>{projectTitle}</h1>
      <div>
       <AiFillCalender color="#171f46" />
       <p>{duration}</p>
      </div>
     </div>
     <p>{description}</p>
     <a href={projectUrl}>Visit</a>
    </div>
  )
}

export default ProjectTimelineCard