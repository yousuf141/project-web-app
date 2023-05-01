import { io } from "socket.io-client";

const WS_ENDPOINT = import.meta.env.WS_ENPOINT ?? undefined;

export const socket = io(WS_ENDPOINT, {
  autoConnect: false,
});
