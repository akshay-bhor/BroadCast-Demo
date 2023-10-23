import socket from "./socket";
let video;
import { peer } from "./peer";

const broadcastInit = () => {
    navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then((stream) => {
        addVideoStream(stream);

        socket.on("user-connected", (userId) => {
            connectToNewUser(userId, stream);
        });
    })
}

const addVideoStream = (stream) => {
    video = document.getElementById('video')
    video.muted = true
    video.srcObject = stream;
    video.addEventListener("loadedmetadata", () => {
      video.play();
    });
};

const toggleMute = () => {
    video.muted = false
}

const connectToNewUser = (userId, stream) => {
    // Sending
    peer.call(userId, stream);
};

export {
    broadcastInit, addVideoStream, toggleMute
}