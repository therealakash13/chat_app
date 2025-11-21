import { useEffect, useRef } from "react";
import { io } from "socket.io-client";

function App() {
  const socketRef = useRef(null); // ensures connection persists across re-renders

  useEffect(() => {
    socketRef.current = io("http://localhost:3000");

    // On connect
    socketRef.current.on("connect", () => {
      console.log("Connected with ID:", socketRef.current.id);
    });

    // On disconnect
    socketRef.current.on("disconnect", () => {
      console.log("Disconnected");
    });

    // Cleanup when component unmounts
    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  return <h1>App</h1>;
}

export default App;
