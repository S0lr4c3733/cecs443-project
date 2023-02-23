import { IAccounts } from "../types";
import { Schema, model } from "mongoose";

const schema = new Schema<IAccounts>(
  {
    _id: String,
    email: { type: String, unique: true },
    password: String,
  },
  { versionKey: false },
);

export default model("accounts", schema);