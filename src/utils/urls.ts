export const ROOT_PATH = "https://morning-brook-83231.herokuapp.com";

const ID_PARAM = ":id";

export const API_QUIZZES = `${ROOT_PATH}/quiz`;
export const API_QUIZ = `${API_QUIZZES}/${ID_PARAM}`;
export const API_USERS = `${ROOT_PATH}/user`;
export const API_USER = `${API_USERS}/user/${ID_PARAM}`;
export const API_LOGIN = `${ROOT_PATH}/login`;

export const getQuizApi = (id: string): string => `${ROOT_PATH}/quiz/${id}`;
