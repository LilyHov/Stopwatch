import React from "react";
import ActionButton from "../common/ActionButton";

export default function ControlButtons(props) {
    const StartButton = (
        <>
            <ActionButton text="Start" action={props.handleStart} active/>
        </>
    );
    const ActiveButtons = (
        <>
            <ActionButton text='Lap' action={props.handleLapCreation} className="action-button"/>
            <ActionButton text="Reset" action={props.handleReset} className="action-button"/>
            <ActionButton text={props.isPaused ? "Resume" : "Stop"}
                          action={props.handlePauseResume}
                          paused={!props.isPaused}
                          active={props.isPaused}
                          className="action-button"
            />
        </>
    );

    return (
        <div className="control-buttons">
            {props.active ? ActiveButtons : StartButton}
        </div>
    );
}