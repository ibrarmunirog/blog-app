import { AxiosError } from "axios";
import { APIError } from "shared/interfaces";

const InternalError = {
  error: "Internal Error",
  message: "Something went wrong!. Please try again later!",
  code: 500,
};

export const transformError = (error: unknown): APIError => {
  if (typeof error !== "object" || !error) {
    return InternalError;
  }

  if (
    error instanceof AxiosError &&
    "response" in error &&
    typeof error.response?.data?.message === "string"
  ) {
    return {
      message: error.response?.data?.message,
      code: error.response?.data?.statusCode,
      error: error.response?.data?.error,
    };
  }

  return InternalError;
};
