import { TextField } from "@mui/material";
import React from "react";

type InputProps = {
  placeholder: string;
  text?: string;
  name: string;
  type: string;
  value?: string;
  label?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};
const Input = ({
  placeholder,
  name,
  type,
  label,
  text,
  onChange,
}: InputProps) => {
  return (
    <div>
      <TextField
        placeholder={placeholder}
        name={name}
        type={type}
        label={label}
        helperText={text}
        onChange={onChange}
        inputProps={{
          style: {
            width: "400px",
            borderRadius: 10,
            fontSize: 20,
            color: "white",
          },
        }}
      />
    </div>
  );
};

export default Input;
