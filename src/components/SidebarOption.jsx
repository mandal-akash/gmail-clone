import React from 'react'
import '../style/sidebarOption.css'
const SidebarOption = ({Icon , tittle , num ,inboxStyle}) => {
  return (
    <div className="sidebarOption">
        <div className={`sidebar-option-element ${inboxStyle && "sidebar-Option-active"} `}>
            <span className="icon">{Icon}</span>
            <p className='iconTittle'>{tittle}</p>
            <p className='num'>{num}</p>
        </div>
    </div>
  )
}

export default SidebarOption