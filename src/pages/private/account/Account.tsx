import { useAuth } from "../../../contexts";
import { useUser } from "../../../contexts/user/useUser";

export const Account = () => {
  const { userId } = useAuth();
  console.log({ userId });
  const { status, user, error } = useUser(userId);
  console.log({ status, user, error });

  return <h1>account page</h1>;
};
