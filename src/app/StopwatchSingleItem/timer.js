import React from "react";

export default function Timer({time}) {
    return (
        <div className="timer">
            <span className="digits">
        {("0" + Math.floor((time / 3600000) % 60)).slice(-2)}:
      </span>
      <span className="digits">
        {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
      </span>
            <span className="digits">
        {("0" + Math.floor((time / 1000) % 60)).slice(-2)}.
      </span>
            <span className="digits mili-sec">
        {("00" + ((time / 10) % 100)).slice(-3)}
      </span>
        </div>
    );
}