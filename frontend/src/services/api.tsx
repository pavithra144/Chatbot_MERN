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
  debugger;
  const res = await axios.get("/user/val");

  console.log(res, "res");
  if (res.status != 200) {
    const data = await res.data;
    return data;
  } else {
    throw new Error("Error fetching data while verifying token");
  }
};
