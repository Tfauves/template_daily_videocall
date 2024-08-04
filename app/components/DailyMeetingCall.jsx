"use client";
import { useEffect, useRef, useState } from "react";
import DailyIframe from "@daily-co/daily-js";

const roomUrl = process.env.NEXT_PUBLIC_DAILY_ROOM_URL;

const DailyMeetingCall = () => {
  const callFrameRef = useRef(null);
  const [isCallActive, setIsCallActive] = useState(false);

  useEffect(() => {
    return () => {
      if (callFrameRef.current) {
        callFrameRef.current.leave();
        callFrameRef.current.destroy();
        callFrameRef.current = null;
      }
    };
  }, []);

  const joinRoom = () => {
    if (!callFrameRef.current) {
      const callFrame = DailyIframe.createFrame({
        showLeaveButton: true,
        showFullscreenButton: true,
      });

      callFrame.join({ url: roomUrl });
      callFrame.on("joined-meeting", handleJoin);

      callFrameRef.current = callFrame;
      setIsCallActive(true);
    }
  };

  const endCall = () => {
    if (callFrameRef.current) {
      callFrameRef.current
        .leave()
        .then(() => {
          callFrameRef.current.destroy();
          callFrameRef.current = null;
          setIsCallActive(false);
        })
        .catch((error) => {
          console.error("Error ending call:", error);
        });
    }
  };

  const handleJoin = (event) => {
    console.log("Joined meeting!", event);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(roomUrl).then(() => {
      alert("Room URL copied to clipboard!");
    });
  };

  return { joinRoom, endCall, copyToClipboard, isCallActive };
};

export default DailyMeetingCall;
