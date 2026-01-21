import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return next(createError(401, "Not authenticated"));

  const token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(createError(403, "Token not valid"));
    req.user = user;
    next();
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      next(createError(403, "Not authorized"));
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      next(createError(403, "Not authorized"));
    }
  });
};
