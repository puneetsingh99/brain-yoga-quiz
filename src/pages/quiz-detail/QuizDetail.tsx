import { Navbar } from "../../components";
import { useParams } from "react-router-dom";

export const QuizDetail: React.FC = () => {
  const { id } = useParams();
  return (
    <>
      <Navbar />
      <main>Quiz details of {id}</main>
    </>
  );
};
