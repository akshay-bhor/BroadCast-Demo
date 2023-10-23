import { useEffect, useState } from "react";
import { v4 } from "uuid";
import { peerInit } from "../utils/peer";
import { broadcastInit } from "../utils/broadcast";

const Broadcast = () => {
    const [broadCastId] = useState(v4());

    useEffect(() => {
        peerInit(broadCastId);
        broadcastInit()
    }, [])

    return (
        <>
            <video id="video"></video>
            <p>View with this link - <a href={`http://localhost:3000?mode=view&id=${broadCastId}`} rel="noreferrer" target="_blank">Link</a></p>
        </>
    )
}

export default Broadcast;