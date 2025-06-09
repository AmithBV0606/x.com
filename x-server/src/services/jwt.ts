import jwt from "jsonwebtoken";
import { User } from "../../generated/prisma";

async function generateTokenForUser(user: User) {
  const payload = {
    id: user?.id,
    email: user?.email,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET!);

  return token;
}

export default generateTokenForUser;