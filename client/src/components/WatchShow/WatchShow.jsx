import React, { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ReactPlayer from "react-player";

import styles from "./WatchShow.module.css";
import play from "../../assets/play.png";
import pause from "../../assets/pause.png";
import UserList from "./UserList";
import Chat from "./Chat";

const WatchShow = ({ socket }) => {
  const { id } = useParams();
  const playerRef = useRef(null);
  var profile = JSON.parse(localStorage.getItem("profile"));

  const [playClicked, setPlayClicked] = useState(false);
  const [pauseClicked, setPauseClicked] = useState(false);
  const [users, setUsers] = useState([]);
  const [roomId, setRoomId] = useState(`${id}`);
  const [message, setMessage] = useState("");
  const [receivedMessages, setReceivedMessages] = useState([]);
  const [userListOpen, setUserListOpen] = useState(true);

  const videos = useSelector((state) => state.movies.videos);
  videos.results = videos?.results
    ?.filter((video) => video.type === "Trailer")
    .slice(0, 1);

  // Listen for incoming users
  useEffect(() => {
    socket?.on("get-users-in-chat", (data) => {
      setUsers(data);
    });
  }, [socket, users]);

  // Join the room when the component mounts
  useEffect(() => {
    socket?.emit("join", roomId);
    return () => {
      socket?.emit("leave", roomId);
    };
  }, [socket, roomId]);

  // Send a message to the room when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault();

    if (profile?.user) {
      const data = {
        message: message,
        user: profile.user,
      };
      socket?.emit("send-to-room", roomId, data);
    }

    setMessage("");
  };

  // Listen for incoming messages
  useEffect(() => {
    socket?.on("message", (msg) => {
      setReceivedMessages((prevMessages) => [...prevMessages, msg]);
    });
  }, [socket]);

  // Pause the video and remove the user from the list
  const pauseVideo = () => {
    playerRef.current.getInternalPlayer().pauseVideo();
    setPauseClicked(true);
    setPlayClicked(false);

    socket?.emit("remove-chat-user", {
      chatUser: profile.user,
    });
  };

  // Play the video and add teh user to the list
  const playVideo = () => {
    playerRef.current.getInternalPlayer().playVideo();
    setPlayClicked(true);
    setPauseClicked(false);

    socket?.emit("add-chat-user", {
      chatUser: profile.user,
      chatId: id,
    });
  };

  return (
    <div className={styles.watch__div}>
      {videos.results && (
        <ReactPlayer
          ref={playerRef}
          url={`https://www.youtube.com/watch?v=${videos.results[0].key}&modestbranding=1`}
          controls={false}
          width="100%"
          height="100%"
        />
      )}
      <div className={styles.video__controllers}>
        <button onClick={playVideo} disabled={!!playClicked}>
          <img src={play} alt="play" />
        </button>
        <button onClick={pauseVideo} disabled={!!pauseClicked}>
          <img src={pause} alt="pause" />
        </button>
      </div>
      {userListOpen ? (
        <UserList users={users} setUserListOpen={setUserListOpen} />
      ) : (
        <Chat
          handleSubmit={handleSubmit}
          message={message}
          setMessage={setMessage}
          receivedMessages={receivedMessages}
          setUserListOpen={setUserListOpen}
        />
      )}
    </div>
  );
};

export default WatchShow;
