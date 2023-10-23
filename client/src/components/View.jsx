import { useEffect, useState } from "react";
import { peerInit } from "../utils/peer";
import { toggleMute } from "../utils/broadcast";

const urlParams = new URLSearchParams(window.location.search);

const View = () => {
    const [broadCastId] = useState(urlParams.get('id'));

    useEffect(() => {
        peerInit(broadCastId);
    }, [])

    return (
        <>
             <video id="video"></video>
             <div onClick={toggleMute}>Toggle Audio</div>
        </>
    )
}

export default View;