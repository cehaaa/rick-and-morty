import React from 'react'

const Ideas = ({idea}) => {
  return (
    <div className="ideas-card">
      <div className="ideas-card-header">
        <div className="ideas-id">#{idea.key} </div>        
        <div className="ideas-heading">{idea.activity}.</div>              
        <div>
          <button className="btn-primary">Save</button>
        </div>
      </div>
      <div className="ideas-card-body">
          <div> Accessibility: <span className="ideas-text"> {idea.accessibility } </span> </div>
          <div> Type: <span className="ideas-text"> {idea.type } </span> </div>
          <div> Participants: <span className="ideas-text"> {idea.participants } </span> </div>
          <div> Price: <span className="ideas-text"> {idea.price } </span> </div>
        </div>
    </div>
  )
}

export default Ideas
