import { SetStateAction } from "react";
import { UserTypes } from "./Users";

export type AuthContextTypes = {
  user: UserTypes | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  setLoading: React.Dispatch<SetStateAction<boolean>>;
  logout: () => void;
};
