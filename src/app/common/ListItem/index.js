import * as React from 'react';
import './list.css'

const ListItem = ({paused, maxValue, minValue, action, time, label }) => {
    let classNames = 'list-item-wrap';
    let timeClasses = '';

    if (paused) {
        classNames += ' paused';
    }

    if (maxValue) {
        timeClasses += ' maxValue';
    }

    if (minValue) {
        timeClasses += ' minValue';
    }

    return (
        <div className={classNames} onClick={action} >
            {label && <span>{label && (label)} </span>}
            <span className={timeClasses}> {time} {paused && (' zzzz')}</span>
        </div>
    )
}

export default ListItem