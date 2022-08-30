import React from "react";
import {
  useHMSActions,
  useHMSStore,
  selectCameraStreamByPeerID
} from "@100mslive/hms-video-react";

const VideoTile = ({ peer, isLocal }) => {
  const hmsActions = useHMSActions();
  const videoRef = React.useRef(null);
  const videoTrack = useHMSStore(selectCameraStreamByPeerID(peer.id));

  React.useEffect(() => {
    (async () => {
      console.log(videoRef.current);
      console.log(videoTrack);
      if (videoRef.current && videoTrack) {
        if (videoTrack.enabled) {
          await hmsActions.attachVideo(videoTrack.id, videoRef.current);
        } else {
          await hmsActions.detachVideo(videoTrack.id, videoRef.current);
        }
      }
    })();
  }, [videoTrack]);
console.log("peer",peer);
  return (
    <div>
      <div>
        <video
          ref={videoRef}
          autoPlay={true}
          playsInline
          muted={true}
        ></video>
        <div>
          <h1>{`${peer.name}`}</h1>
        </div>
      </div>
    </div>
  );
};

export default VideoTile;