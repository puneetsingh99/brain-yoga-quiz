import { useAuth } from "../../contexts";

export const TakeQuiz = () => {
  const { logout } = useAuth();
  return (
    <div>
      <button onClick={logout}>Logout</button>
      <h1>THIS is the private page take quiz</h1>;
    </div>
  );
};
