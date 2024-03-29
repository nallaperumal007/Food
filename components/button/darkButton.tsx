import React from "react";
import cls from "./button.module.scss";
import { CircularProgress } from "@mui/material";

type ButtonType = "button" | "submit";
type ButtonSize = "small" | "medium" | "large";

type Props = {
  children: any;
  disabled?: boolean;
  onClick?: () => void;
  type?: ButtonType;
  icon?: React.ReactElement;
  size?: ButtonSize;
  loading?: boolean;
};

export default function DarkButton({
  children,
  disabled,
  onClick,
  type = "button",
  icon,
  size = "medium",
  loading = false,
}: Props) {
  return (
    <button
      type={type}
      className={`${cls.darkBtn} ${cls[size]} ${disabled ? cls.disabled : ""}`}
      disabled={disabled}
      onClick={onClick}
    >
      {!loading ? (
        <>
          {icon ? icon : ""}
          <span className={cls.text}>{children}</span>
        </>
      ) : (
        <CircularProgress
          size={22}
          sx={{ color: "#fff", "& *": { color: "inherit" } }}
        />
      )}
    </button>
  );
}
