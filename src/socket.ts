import { io } from "socket.io-client";

const WS_ENDPOINT = import.meta.env.VITE_WS_ENDPOINT ?? undefined;

export const socket = io(WS_ENDPOINT, {
  autoConnect: false,
});
