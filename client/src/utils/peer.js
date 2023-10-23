import { Peer } from "peerjs"
import socket from "./socket";
import { addVideoStream } from "./broadcast";
let peer;
let BROADCAST_ID;

const peerInit = (broadcastId) => {
    BROADCAST_ID = broadcastId;
    peer = new Peer({
        host: '127.0.0.1',
        port: 4000,
        path: '/peerjs',
        config: {
        'iceServers': [
            { url: 'stun:stun01.sipphone.com' },
            { url: 'stun:stun.ekiga.net' },
            { url: 'stun:stunserver.org' },
            { url: 'stun:stun.softjoys.com' },
            { url: 'stun:stun.voiparound.com' },
            { url: 'stun:stun.voipbuster.com' },
            { url: 'stun:stun.voipstunt.com' },
            { url: 'stun:stun.voxgratia.org' },
            { url: 'stun:stun.xten.com' },
            {
            url: 'turn:192.158.29.39:3478?transport=udp',
            credential: 'JZEOEt2V3Qb0y27GRntt2u2PAYA=',
            username: '28224511:1379330808'
            },
            {
            url: 'turn:192.158.29.39:3478?transport=tcp',
            credential: 'JZEOEt2V3Qb0y27GRntt2u2PAYA=',
            username: '28224511:1379330808'
            }
        ]
        }
    });

    peer.on("open", (userId) => {
        console.log('my id is' + userId);
        socket.emit("join-broadcast", BROADCAST_ID, userId);
    });
    
    peer.on("call", (call) => {
        // Receive
        call.answer();
        call.on("stream", (userVideoStream) => {
          addVideoStream(userVideoStream);
        });
    });
}

export {
    peer, peerInit
}