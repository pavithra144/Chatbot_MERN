import { Avatar, Box, Typography } from "@mui/material";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import openai from "../assets/openai.png";

type chatItemProps = {
  content: string;
  role: "user" | "assistant";
};
const ChatItem = ({ content, role }: chatItemProps) => {
  const auth = useContext(AuthContext);

  return role === "assistant" ? (
    <Box>
      <Avatar>
        <img src={openai} alt="openai" width="20px" />
      </Avatar>
      <Box>
        <Typography>{content}</Typography>
      </Box>
    </Box>
  ) : (
    <Box>
      <Avatar>{auth?.user?.name[0]}</Avatar>
      <Box>
        <Typography>{content}</Typography>
      </Box>
    </Box>
  );
};

export default ChatItem;
