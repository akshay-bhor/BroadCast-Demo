import { io } from "socket.io-client";
const socket = io("127.0.0.1:4000")

export default socket;