"use client";
import React from "react";
import DailyMeetingCall from "./DailyMeetingCall";

const CallUI = () => {
  const { joinRoom, endCall, copyToClipboard, isCallActive } =
    DailyMeetingCall();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden flex">
        <div className="w-1/2">
          <img
            src="https://via.placeholder.com/500"
            alt="Placeholder"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-1/2 p-8">
          <div id="call-frame-container"></div>
          <button className="btn mt-3.5 w-full" onClick={joinRoom}>
            {isCallActive ? "Rejoin Call" : "Start Call"}
          </button>
          {isCallActive && (
            <button className="btn mt-3.5 w-full" onClick={endCall}>
              End Call
            </button>
          )}
          <div className="mt-4">
            <p className="text-sub-text">
              Share this meeting with participant:
            </p>
            <button className="btn mt-2 w-full" onClick={copyToClipboard}>
              Copy URL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallUI;
