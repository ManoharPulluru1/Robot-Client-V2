import { useEffect } from "react";
import React from "react";
import "./Learn.css";
import io from "socket.io-client";

const socket = io("https://robots-server.gov-cloud.ai/");

const Learn = () => {
  const handlePress = (direction) => {
    socket.emit("press", direction); // Emit press event with direction
  };

  const handleRelease = (direction) => {
    socket.emit("release", direction); // Emit release event with direction
  };

  useEffect(() => {
    // Disconnect socket on component unmount
    return () => {
      socket.disconnect();
    };
  }, []);
  return (
    <div className="learnMain">
      <div className="learnLeft">
        <div className="actionsButtons">
          <div className="Charge">Charge</div>
          <div className="AddData">Add Data</div>
          <div className="Interact">Auto</div>
        </div>
      </div>
      <div className="learnRight">
        <div className="mappingButtons">
          <div className="startMappingButton">Start Scan</div>
          <div className="pauseMappingButton">Pause Scan</div>
          <div className="endMappingButton">End Scan</div>
        </div>
        <div className="controlButtons">
          <div className="controlBox">
            <div onMouseDown={() => handlePress("top")} onMouseUp={() => handleRelease("top")} onContextMenu={(e) => e.preventDefault()} className="upArrowKey remoteKey">
              ▲
            </div>
            <div onMouseDown={() => handlePress("bottom")} onMouseUp={() => handleRelease("bottom")} onContextMenu={(e) => e.preventDefault()} className="downArrowKey remoteKey">
              ▼
            </div>
            <div onMouseDown={() => handlePress("right")} onMouseUp={() => handleRelease("right")} onContextMenu={(e) => e.preventDefault()} className="rightArrowKey remoteKey">
              ►
            </div>
            <div onMouseDown={() => handlePress("left")} onMouseUp={() => handleRelease("left")} onContextMenu={(e) => e.preventDefault()} className="leftArrowKey remoteKey">
              ◄
            </div>
            <div className="stopButton">STOP</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
