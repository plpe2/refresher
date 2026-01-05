import { UserTypes } from "./Users";

export type AuthContextTypes = {
  user: UserTypes | null;
  isAuthenticated: boolean;
  logout: () => void;
};
