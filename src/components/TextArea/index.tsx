import "./input.style.css";
import { TextareaHTMLAttributes, useState } from "react";
import { FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder?: string;
  register?: any;
  name: string;
  label?: string;
}

export const BGTextArea = ({
  label,
  register,
  name,
  placeholder,
  ...rest
}: TextAreaProps) => {
  return (
    <div className="textarea-form">
      {label && <div className="textarea-label">{label}</div>}
      {/* <div className={!!error ? "input-field borded" : "input-field"}> */}
      <textarea
        {...(register && { ...register(name) })}
        rows="5"
        columns="50"
        placeholder={placeholder}
        {...rest}
        // className={!!error ? "input-password error" : "input-password"}
        // placeholder={!!error ? `${error}` : `${placeholder}`}
      />
      {/* </textarea> */}
      {/* </div> */}
    </div>
  );
};
