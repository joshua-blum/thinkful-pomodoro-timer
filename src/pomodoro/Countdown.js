import React from "react";
import {minutesToDuration, secondsToDuration} from '../utils/duration';


function Countdown({session, focusDuration, breakDuration}) {
    return(
        // TODO: This area should show only when there is an active focus or break - i.e. the session is running or is pause
        !session ? null : (
        <div className="row mb-2">
            
          <div className="col">
            {/* TODO: Update message below to include current session (Focusing or On Break) total duration */}
            <h2 data-testid="session-title">
              {session.label} for {minutesToDuration(session.label === "On Break" ? breakDuration : focusDuration)} minutes
            </h2>
            {/* TODO: Update message below correctly format the time remaining in the current session */}
            <p className="lead" data-testid="session-sub-title">
              {secondsToDuration(session.timeRemaining)} remaining
            </p>
          </div>
        </div>
        )
    )
}

export default Countdown;