// Write your code here
import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {imageUrl, projectTitle, duration, description, projectUrl} =
    projectDetails

  console.log(projectDetails)

  return (
    <div className="project-details-container">
      <img alt="project" className="project-img" src={imageUrl} />
      <div className="project-title-duration-container">
        <h1 className="project-title">{projectTitle}</h1>

        <div className="project-duration-container">
          <AiFillCalendar className="project-duration-icon" />
          <p className="project-duration">{duration}</p>
        </div>
      </div>
      <p className="project-description">{description}</p>

      <a href={projectUrl} className="visit-link">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
