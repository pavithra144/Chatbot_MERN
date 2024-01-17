import { useRef, useState } from "react";
import ChatItem from "../components/ChatItem";
import { IconButton } from "@mui/material";
import { IoMdSend } from "react-icons/io";
import { getChats } from "../services/api";

type chatMessagePropDetails = {
  role: "user" | "assistant";
  content: string;
};

const Chat = () => {
  const [chatMessages, setChatMessages] = useState([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = async () => {
    debugger;
    const content = inputRef?.current?.value as string;
    if (inputRef && inputRef.current) {
      inputRef.current.value = "";
    }
    const newMessage: chatMessagePropDetails = { role: "user", content };
    setChatMessages((prev) => [...prev, newMessage]);
    console.log(newMessage, "new messg");
    //api call
    const getChatsApi = await getChats(content);
    console.log(getChatsApi, "fkdgkdj");
    setChatMessages([...getChatsApi.chats]);
  };
  return (
    <div style={{ marginTop: "80px" }}>
      {chatMessages.map(({ role, content }, idx) => (
        <>
          <ChatItem content={content} role={role} key={idx} />
        </>
      ))}
      <input
        type="text"
        placeholder="Enter your question"
        name="chat"
        ref={inputRef}
      />
      <IconButton onClick={handleSubmit}>
        <IoMdSend />
      </IconButton>
    </div>
  );
};

export default Chat;
