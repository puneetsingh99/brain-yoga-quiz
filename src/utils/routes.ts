export const ID_PARAM = ":id";

export const ROUTE_HOME = "/";
export const ROUTE_QUIZ = `/quiz/${ID_PARAM}`;
export const ROUTE_QUIZ_DETAIL = `/quiz/detail/${ID_PARAM}`;
export const ROUTE_TAKE_QUIZ = `/quiz/take/${ID_PARAM}`;
export const ROUTE_LOGIN = `/login`;
export const ROUTE_SIGN_UP = `/signup`;
export const ROUTE_ACCOUNT = `/account`;

export const routeQuizDetail = (id: string): string => `/quiz/detail/${id}`;
export const routeTakeQuiz = (id: string): string => `/quiz/take/${id}`;
