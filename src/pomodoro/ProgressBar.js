import React from "react";

function ProgressBar({progressBarFunction}){
    return (
        <div className="row mb-2">
          <div className="col">
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={progressBarFunction()} // TODO: Increase aria-valuenow as elapsed time increases
                style={{ width: `${progressBarFunction()}%` }} // TODO: Increase width % as elapsed time increases
              />
            </div>
          </div>
        </div>
    )
}


export default ProgressBar;