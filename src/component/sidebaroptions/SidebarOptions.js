import React from 'react'
import './sidebaroptions.css'

const SidebarOptions = (props) => {
    const { active, text, Icon } = props
    return (
        <div className={`sidebaroptions ${active && `sidebaroptions--active`}`}>
            <Icon />
            <h2>{text}</h2>
        </div>
    )
}

export default SidebarOptions
