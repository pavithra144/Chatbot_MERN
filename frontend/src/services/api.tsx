import axios from "axios";

export const loginApi = async (email: string, password: string) => {
  const res = await axios.post("/user/login", { email, password });
  if (res.status) {
    const data = res.data;
    return data;
  } else {
    throw new Error("Error fetching data in api call");
  }
};

export const verifyToken = async () => {
  const res = await axios.get("/user/val");

  if (res.status == 200) {
    const data = await res.data;
    return data;
  } else {
    throw new Error("Error fetching data while verifying token");
  }
};

export const getChats = async (message: string) => {
  const res = await axios.post(
    "/chat/new",
    { message },
    { headers: { "Retry-After": 3600 } }
  );
  debugger;
  if (res.status == 200) {
    const data = await res.data;
    return data;
  } else {
    throw new Error("Errow whilw getting chats");
  }
};
