import React from "react";
import ActionButton from "../common/ActionButton";

export default function ControlButtons(props) {
    const StartButton = (
        <div className="btn btn-one btn-start">
            <ActionButton text="Start" action={props.handleStart} active/>
        </div>
    );
    const ActiveButtons = (
        <div className="btn-grp">
            <ActionButton text="Reset" action={props.handleReset} />
            <ActionButton text='Lap' action={props.handleLapCreation}/>
            <ActionButton text={props.isPaused ? "Resume" : "Stop"} action={props.handlePauseResume} paused={!props.isPaused} active={props.isPaused}/>
        </div>
    );

    return (
        <div className="Control-Buttons">
            <div>{props.active ? ActiveButtons : StartButton}</div>
        </div>
    );
}