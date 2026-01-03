import { AuthContextTypes } from "@/types/Context";
import { createContext } from "react";

export const AuthContext = createContext<AuthContextTypes | undefined>(
  undefined
);
