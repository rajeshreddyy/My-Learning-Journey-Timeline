import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimeLineCard = timelineItem => {
    const {id, categoryId} = timelineItem
    if (categoryId === 'COURSE') {
      return <CourseTimelineCard key={id} courseDetails={timelineItem} />
    }
    return <ProjectTimelineCard key={id} projectDetails={timelineItem} />
  }

  return (
    <div
      style={{width: 'auto', height: 'auto'}}
      className="timeline-view-container"
    >
      <h1>
        MY JOURNEY OF <br />
        CCBP 4.0
      </h1>

      <Chrono
        items={timelineItemsList.map(item => ({title: item.title}))}
        mode="VERTICAL_ALTERNATING"
        itemWidth={80}
      >
        {timelineItemsList.map(eachItem => renderTimeLineCard(eachItem))}
      </Chrono>
    </div>
  )
}

export default TimelineView
