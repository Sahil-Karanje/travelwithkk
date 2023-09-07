import React from 'react'
import './ActivityCard.css'

const ActivityCard = (props) => {
    return (
            <div className="activity-div" >
                <div className="activity-img-div">
                    <img src={props.activityimg} alt="" className="activity-img" />
                </div>
                <div className="activity-name">{props.activityname}</div>
                <div className="activity-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </div>
            </div>
    )
}

export default ActivityCard