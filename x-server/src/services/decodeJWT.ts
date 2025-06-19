import jwt from "jsonwebtoken";
import { JWTUser } from "../types";

async function DecodeJWT(token: string) {
  return jwt.verify(token, process.env.JWT_SECRET!) as JWTUser;
}

export default DecodeJWT;
