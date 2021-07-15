import { ServerError } from "./serverError.types";

export type FetchUserStatus = "loading" | "success" | "error";

export type UserQuizData = {
  _id: string;
  quiz: {
    _id: string;
    name: string;
  };
  score: number;
  timeTaken: number;
};

export type User = {
  _id: string;
  name: string;
  username: string;
  quizzesTaken: UserQuizData[];
};

export type USER_ACTION =
  | {
      type: "SET_STATUS";
      payload: FetchUserStatus;
    }
  | {
      type: "SET_USER";
      payload: User;
    }
  | {
      type: "SET_ERROR";
      payload: ServerError;
    }
  | {
      type: "SET_SHOW_CHART_OF";
      payload: string;
    };

export type UserState = {
  status: FetchUserStatus;
  user: User | null;
  error: ServerError | null;
  showChartOf: string | null;
};

export type GetUserResponse = {
  success: true;
  message: "User retrieved successfully";
  user: User;
};

export type UserReducerState = {
  user: User;
};

// {
//   "success": true,
//   "message": "User retrieved successfully",
//   "user": {
//     "_id": "60cf345ae3313423a46f1f05",
//     "name": "Pratik Singh",
//     "username": "pratik",
//     "quizzesTaken": [
//       {
//         "_id": "60e5b1233298d10bf8a4a66f",
//         "quiz": {
//           "_id": "60cf23683588e403a49001ac",
//           "name": "Stock Market basics"
//         },
//         "score": 60,
//         "timeTaken": 4
//       }
//     ]
//   }
// }
