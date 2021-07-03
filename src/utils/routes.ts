export const ID_PARAM = ":id";

export const ROUTE_HOME = "/";
export const ROUTE_QUIZ = `/quiz/${ID_PARAM}`;
export const ROUTE_QUIZ_DETAIL = `/quiz/detail/${ID_PARAM}`;
export const LOGIN = `/login`;
export const SIGN_UP = `/signup`;

export const routeQuizDetail = (id: string): string => `/quiz/detail/${id}`;
