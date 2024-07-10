// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {title, courseTitle, description, duration, tagsList} = courseDetails

  return (
    <div className="course-details-container">
      <div className="course-title-date-container">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="course-duration-container">
          <AiFillClockCircle className="course-duration-icon" />
          <p className="course-duration">{duration}</p>
        </div>
      </div>

      <p className="course-description">{description}</p>

      <div className="tags-list-container">
        {tagsList.map(eachTag => {
          const {id, name} = eachTag
          return (
            <p className="course-tag" key={id}>
              {name}
            </p>
          )
        })}
      </div>
    </div>
  )
}

export default CourseTimelineCard
