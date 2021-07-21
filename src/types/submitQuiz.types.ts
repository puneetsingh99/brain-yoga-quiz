import { ServerError } from "./serverError.types";

export type QuizTakenByUser = {
  _id: string;
  quiz: string;
  score: number;
  timeTaken: number;
};

export type UpdatedUserType = {
  _id: string;
  username: string;
  quizzesTaken: QuizTakenByUser[];
};

export type SubmitQuizResponse = {
  success: boolean;
  message: string;
  updatedUser: UpdatedUserType;
};

export type SubmitQuizPayload = {
  quiz: string;
  score: number;
  timeTaken: number;
};

export type SubmitQuizStatus = "submitting" | "success" | "error";

export type ACTION_TYPE =
  | { type: "SET_STATUS"; payload: SubmitQuizStatus }
  | { type: "SET_SUBMITTED_QUIZ_RESPONSE"; payload: UpdatedUserType }
  | { type: "SET_ERROR"; payload: ServerError };

export type SubmitQuizType = {
  status: SubmitQuizStatus;
  updatedUser: UpdatedUserType | null;
  error: ServerError | null;
};

// {
//   "success": true,
//   "message": "Quiz taken by user updated successfully",
//   "updatedUser": {
//     "_id": "60cf347de3313423a46f1f06",
//     "username": "puneet",
//     "quizzesTaken": [
//       {
//         "_id": "60e248b131c7fa06a4540c72",
//         "quiz": "60cf23683588e403a49001ac",
//         "score": 71,
//         "timeTaken": 4
//       },
//       {
//         "_id": "60ef5df666920400159a6c55",
//         "quiz": "60cf29c56aaeae0f8800d62f",
//         "score": 40,
//         "timeTaken": 4
//       },
//       {
//         "_id": "60ef5e0866920400159a6c57",
//         "quiz": "60cf2dbd6a351e1cbc42dfbf",
//         "score": 50,
//         "timeTaken": 3
//       },
//       {
//         "_id": "60ef5e2566920400159a6c59",
//         "quiz": "60cf3052a3427b1338899fa8",
//         "score": 45,
//         "timeTaken": 5
//       },
//       {
//         "_id": "60ef5e4066920400159a6c5b",
//         "quiz": "60cf3256703c8216c4a15e58",
//         "score": 60,
//         "timeTaken": 5
//       }
//     ]
//   }
// }
