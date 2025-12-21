import { UserTypes } from "@/types/Users";
import { createContext } from "react";

export const AuthContext = createContext<UserTypes | undefined>(undefined);
