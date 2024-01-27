import ErrorHandler from "@backend/utils/errorHandler";
import { getSession } from "next-auth/react";

ErrorHandler;

const isAuthenticatedUser = async (req, res, next) => {
  const session = await getSession({ req });

  if (!session) {
    return next(new ErrorHandler("Login first to access this route", 401));
  }

  req.user = session.user;

  next();
};

export { isAuthenticatedUser };
