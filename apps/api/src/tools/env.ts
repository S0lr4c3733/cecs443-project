import dotenv from "dotenv";

dotenv.config();

export default {
  // SERVER ENV
  PORT: process.env.PORT ?? "8080",
  // MONGODB ENV
  DB_URL: process.env.DB_URL ?? "",
  DB_NAME: process.env.DB_NAME ?? "",
  DB_USER: process.env.DB_USER ?? "",
  DB_PASSWORD: process.env.DB_PASSWORD ?? "",
  // KEYS ENV
  JWT_KEY: process.env.JWT_KEY ?? "",
};
