import { useAuth } from "../../../contexts";
import { LogOut } from "react-feather";

export const FloatingLogout = () => {
  const { logout } = useAuth();
  return (
    <div
      onClick={logout}
      className="fixed gradient-bg flex justify-center items-center rounded-full p-5 logout-position shadow-lg"
    >
      <LogOut />
    </div>
  );
};
