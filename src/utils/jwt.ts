import { IJwtConfig, IPayload, TToken } from "../interfaces/IJwt";

const jwt = require("jsonwebtoken");
require("dotenv/config");

const SECRET = process.env.SECRET_JWT;

const jwtConfig: IJwtConfig = {
  expiresIn: "1d",
  algorithm: "HS256",
};

const createToken = async (payload: IPayload) =>
  jwt.sign(payload, SECRET, jwtConfig);

const verifyToken = async (token: TToken) => jwt.verify(token, SECRET);

module.exports = {
  createToken,
  verifyToken,
};
