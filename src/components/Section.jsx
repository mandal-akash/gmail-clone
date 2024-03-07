import React from 'react'
import '../style/section.css'
const Section = ({icon , tittle , selected}) => {
  return (
   <div className={`section ${selected && "section-selected"}`}>
        <span className="icons">{icon}</span>
        <h4>{tittle}</h4>
   </div>
  )
}

export default Section