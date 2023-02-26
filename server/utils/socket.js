const socket = (server) => {
  const io = require("socket.io")(server, {
      cors: {
        origin: "http://127.0.0.1:5173",
      },
  });
  
  let activeUsers = [];
  let userInChat = [];
  
  const getUser = (user) => {
    return activeUsers.find((item) => item.id === user.id);
  }

  const addNewUser = (socketId, user) => {
    !activeUsers.some((item) => item.id === user.id) && activeUsers.push({socketId, user});
  }

  const removeUser = (socketId) => {
    activeUsers = activeUsers.filter((user) => user.socketId !== socketId);
  }
  
  io.on("connection", (socket) => {
    socket.on("new-user-add", (user) => {
      addNewUser(socket.id, user);

      // console.log('users', activeUsers);
      io.emit("get-users", activeUsers);
    });

    socket.on("add-chat-user", ({chatId, chatUser}) => {

      if (!userInChat.some((item) => item.chatUser.id === chatUser.id)) {
          userInChat.push({ chatUser , chatId});
          console.log("In the chat  -> ", userInChat);
      }
      io.emit("get-users-in-chat", userInChat);
    });
  
    socket.on("remove-chat-user", ({chatUser}) => {
      userInChat = userInChat.filter((item) => item.chatUser.id !== chatUser.id);
      console.log("Logout user in chat ", userInChat);
      io.emit("get-users-in-chat", userInChat);
    });
  
    socket.on("disconnect", () => {
      removeUser(socket.id);
      console.log("User Disconnected", activeUsers);
      io.emit("get-users", activeUsers);
    });
  
    socket.on("offline", () => {
      activeUsers = activeUsers.filter((user) => user.socketId !== socket.id);
      console.log("User Disconnected", activeUsers);
      io.emit("get-users", activeUsers);
    });

    socket.on("typing", (receiverId) => {
      const user = getUser(receiverId);
      if (user) {
        io.to(user.socketId).emit("receiver-typing", receiverId);
      }
    });
  
    socket.on("send-message", (data) => {
      const { receiverId } = data;
      const user = activeUsers.find((user) => user.userId === receiverId);
      // console.log("Sending from socket to :", receiverId)
      data.status = "sent"
      // console.log("Data: ", data)
      if (user) {
        io.to(user.socketId).emit("recieve-message", data);
      }
  
    });
  });
}

module.exports = socket;