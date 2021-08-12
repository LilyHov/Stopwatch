import * as React from 'react'
import  './actionButton.css'

const Index = ({paused, text, action}) => {
    let classNames = "button"
    if(paused){
        classNames += " paused-btn"
    }
    return (
        <div className="button-wrapper">
            <button className={classNames} onClick={action}>{text}</button>
        </div>
    )
}
export default Index