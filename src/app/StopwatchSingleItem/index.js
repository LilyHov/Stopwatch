import React, {useState, useEffect} from 'react'
import moment from 'moment'
import ListItem from "../common/ListItem";
import ActionButton from "../common/ActionButton";

const Timer = ({interval}) => {
    const pad = (n) => n < 10 ? '0' + n : n
    const duration = moment.duration(interval)
    const milliseconds = Math.floor(duration.milliseconds() / 10)
    return (
        <div className={'timer'}>
            <span>{pad(duration.hours())}:</span>
            <span>{pad(duration.minutes())}:</span>
            <span>{pad(duration.seconds())},</span>
            <span>{pad(milliseconds)}</span>
        </div>
    )
}

const LapList = ({laps, timer }) => {
    const finishedLaps = laps.slice(1)
    let min = Number.MAX_SAFE_INTEGER
    let max = Number.MIN_SAFE_INTEGER
    if (finishedLaps.length >= 2) {
        finishedLaps.forEach(lap => {
            if (lap < min) min = lap
            if (lap > max) max = lap
        })
    }
    return(<div>
            {laps.map((lap, index) => (
                <ListItem
                  label={`Lap ${laps.length - index}`}
                  key={laps.length - index}
                  time={index === 0 ? timer + lap : lap}
                  maxValue={lap === max}
                  minValue={lap === min}
                />
            ))}
       </div>
    )
}

const StopwatchSingleItem = () => {
    const [start, setStart] = useState(0)
    const [current, setCurrent] = useState(0)
    const [laps, setLaps] = useState([])

    useEffect(() => {
        clearInterval(timer)
    })

    const onStart = () => {
        const now = new Date().getTime()
        setStart(now)
        setCurrent(now)
        setLaps([0])

        timer = setInterval(() => {
         setCurrent( new Date().getTime())
        }, 100)
    }

    const onLapCreated = () => {
        const timestamp = new Date().getTime()
        const [firstLap, ...other] = laps
        setStart(timestamp)
        setCurrent(timestamp)
        setLaps([0, firstLap + current - start, ...other])
    }

    const onStop = () => {
        // clearInterval(timer)
        const [firstLap, ...other] = laps
        setStart(0)
        setCurrent(0)
        setLaps([firstLap + current - start, ...other],)
    }

    const onReset = () => {
        setLaps([])
        setStart(0)
        setCurrent(0)
    }

    const onResume = () => {
        const current = new Date().getTime()
        setStart(current)
        setCurrent(current)
        timer = setInterval(() => {
          setCurrent( new Date().getTime())
        }, 100)
    }

    let timer = current-start
    return (
        <div>
            <Timer interval={laps.reduce((total, curr) => total + curr, 0) + timer}/>
             <div>
                 {start ?
                 <div>
                    <ActionButton text='Stop' action={onStop} paused/>
                    <ActionButton text='Lap' action={onLapCreated}/>
                 </div> :
                 <ActionButton text='Start' action={onStart} active/>}
                 {laps.length > 0 && start===0 && (
                        <ActionButton text='Resume' action={onResume} />
                 ) }
             </div>
            <LapList laps={laps} timer={timer}/>
            {laps.length > 0 && (<ActionButton text='Reset' action={onReset}/>)}
            <ActionButton text='Remove'/>
        </div>
    )
}

export default StopwatchSingleItem