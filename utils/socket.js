import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { socketServerApi } from "./api";

const SocketContext = createContext(null);
export const useSocket = () => {
  const socket = useContext(SocketContext);
  return socket;
};
export const SocketProvider = ({ children }) => {
  const [socket, setsocket] = useState(null);
  const [isMsgReceived, setisMsgReceived] = useState(false);
  useEffect(() => {
    const connection = io(socketServerApi, {
      path: "/jersfolio",
    });
    setsocket(connection);

    connection.on("message", (data) => {
      setisMsgReceived(!isMsgReceived);
      console.log(data, "socket");
    });

    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, []);

  const socketSendMessage = (data) => {
    socket?.emit("sendmessage", data);
  };

  return (
    <SocketContext.Provider
      value={{
        socket,
        isMsgReceived,
        socketSendMessage,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};
