const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8080 });
console.log("WebSocket server listening on ws://localhost:8080/");

wss.on("connection", (ws) => {
  console.log("WebSocket connection established.");
  const sendData = () => {
    // Send a random value.
    ws.send(JSON.stringify({ time: Date.now(), value: Math.random() }));

    // Wait up to a second before sending the next value.
    setTimeout(sendData, Math.random() * 1000);
  };

  // Send the first value.
  sendData();
});
