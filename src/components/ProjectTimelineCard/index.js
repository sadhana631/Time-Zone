import {AiFillCalender} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {imageUrl, projectTitle, description, projectUrl, duration} =
    projectDetails

  return (
    <ProjectCardContainer>
      <ProjectImage src={imageUrl} alt="project" />
      <ProjectTitleAndDurationContainer>
        <ProjectTitle>{projectTitle}</ProjectTitle>
        <DurationContainer>
          <AiFillCalender color="#171f46" />
        </DurationContainer>
      </ProjectTitleAndDurationContainer>
      <ProjectDescription>{description}</ProjectDescription>
      <VisitLink href={projectUrl}>Visit</VisitLink>
    </ProjectCardContainer>
  )
}

export default ProjectTimelineCard
