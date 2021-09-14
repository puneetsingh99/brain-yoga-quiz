// export const ROOT_PATH = "https://morning-brook-83231.herokuapp.com";
export const ROOT_PATH =
  "https://brain-yoga-quiz-app-backend-1.puneetsingh2.repl.co";

const ID_PARAM = ":id";

export const API_QUIZZES = `${ROOT_PATH}/quiz`;
export const API_QUIZ = `${API_QUIZZES}/${ID_PARAM}`;
export const API_USERS = `${ROOT_PATH}/user`;
export const API_USER = `${API_USERS}/user/${ID_PARAM}`;
export const API_LOGIN = `${ROOT_PATH}/login`;

export const getQuizApi = (id: string): string => `${ROOT_PATH}/quiz/${id}`;
export const getUserApi = (id: string): string => `${ROOT_PATH}/user/${id}`;
export const submitQuizApi = (userId: string) =>
  `${API_USERS}/${userId}/quiz-taken/`;
