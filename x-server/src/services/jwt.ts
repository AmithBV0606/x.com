import jwt from "jsonwebtoken";
import { User } from "../../generated/prisma";
import { JWTUser } from "../types";

async function generateTokenForUser(user: User) {
  const payload: JWTUser = {
    id: user?.id,
    email: user?.email,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET!);

  return token;
}

export default generateTokenForUser;