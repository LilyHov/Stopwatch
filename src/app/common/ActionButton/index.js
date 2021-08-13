import * as React from 'react'
import  './actionButton.css'

const ActionButton = ({paused, text, action, active, className}) => {
    let classNames = "button "

    if(paused){
        classNames += "paused-btn "
    }

    if(active){
      classNames += "active-btn "
    }

    if(className){
        classNames += className
    }

    return <button className={classNames} onClick={action}>{text}</button>

}
export default ActionButton