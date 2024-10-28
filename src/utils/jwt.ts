import jwt from "jsonwebtoken";

export const createJWT = (payload: object) => {
  return jwt.sign({ payload }, process.env.JWT_SECRET as string, {
    expiresIn: "2h",
  });
};
