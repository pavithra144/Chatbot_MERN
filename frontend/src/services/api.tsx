import axios from "axios";

export const loginApi = async (email: string, password: string) => {
  const res = await axios.post(
    "/user/login",
    { email, password },
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
        "Access-Control-Allow-Headers": "Authorization",
      },
    }
  );
  if (res.status) {
    const data = res.data;
    return data;
  } else {
    throw new Error("Error fetching data in api call");
  }
};
