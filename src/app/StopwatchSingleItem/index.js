import React, { useState } from "react";

import TimerFormat from "../utils/timerFormat";
import ControlButtons from "./ControlButtons";
import ActionButton from "../common/ActionButton";
import LapList from "./lapList";
import './index.css'

function StopWatch() {
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [time, setTime] = useState(0);
    const [laps, setLaps] = useState([0])
    const [start, setStart] = useState(0)

    React.useEffect(() => {
        let interval = null;
        if (isActive && !isPaused) {
            interval = setInterval(() => {
                setTime((time) => time + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [isActive, isPaused]);

    const handleStart = () => {
        const start = new Date().getTime()
        setStart(start)
        setTime(start)
        setIsActive(true);
        setIsPaused(false);
    };

    const handlePauseResume = () => {
        setIsPaused(!isPaused);
    };

    const handleReset = () => {
        setIsActive(false);
        setStart(0)
        setTime(0);
        setLaps([0])
    };
    const handleRemove = () => {
        setIsActive(false);
        setStart(0)
        setTime(0);
        setLaps([0])
        console.log('delete and redirect to home')
    }
    const handleLapCreation = () => {
        setLaps([...laps, time-start])
    }

    return (
        <div className="stop-watch">
            <TimerFormat time={time-start} classNames="main-timer"/>
            <ControlButtons
                active={isActive}
                isPaused={isPaused}
                handleStart={handleStart}
                handlePauseResume={handlePauseResume}
                handleReset={handleReset}
                handleLapCreation={handleLapCreation}
            />
            <LapList laps={laps.map((lap, index)=> lap-laps[index-1] || 0 )} />
           <div className="single-line-btn"> <ActionButton text='Remove' action={handleRemove}/></div>
        </div>
    );
}

export default StopWatch;
