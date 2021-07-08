import axios from "axios";

export const setupAuthHeaders = (token: string) => {
  if (token) {
    return (axios.defaults.headers.common["Authorization"] = token);
  }
  delete axios.defaults.headers.common["Authorization"];
};
