import { Box, Button, Typography } from "@mui/material";
import airobot from "../assets/airobot.png";
import Input from "../custom-components/Input";
import AuthContext from "../context/AuthContext";
import { useContext } from "react";
import toast from "react-hot-toast";

const Login = () => {
  // const [formValues, setFormValues] = useState({ email: "", password: "" });

  // const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(e);
  //   const { name, value } = e.target;
  //   setFormValues({ ...formValues, [name]: value });
  //   console.log(formValues);
  // };
  const auth = useContext(AuthContext);
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      toast.loading("Loading...", { id: "login" });
      await auth?.login(email, password);
      toast.success("Logged In!!", { id: "login" });
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data, { id: "login" });
    }
  };
  return (
    <div>
      <Box>
        {/* robo image */}
        <img src={airobot} alt="airobot" style={{ width: "400px" }} />
      </Box>
      <Box>
        {/* LoginHeader */}
        <form onSubmit={submitHandler}>
          <Box>
            <Typography variant="h4">Login</Typography>
            <Input
              type="text"
              // value={formValues.email}
              // onChange={inputHandler}
              placeholder="Enter your email"
              name="email"
              label="Email"
            />
            <Input
              type="text"
              placeholder="Enter your password"
              name="password"
              label="Password"
            />
          </Box>
          <Button
            type="submit"
            sx={{
              px: 2,
              py: 1,
              mt: 2,
              width: "400px",
              borderRadius: 2,
              ":hover": { bgcolor: "white", color: "black" },
            }}
          >
            Login
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default Login;
