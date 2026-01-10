import { UserTypes } from "./Users";

export type AuthContextTypes = {
  user: UserTypes | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  logout: () => void;
};
