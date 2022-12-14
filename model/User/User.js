import { Schema, model, models } from "mongoose";

const userSchema = new Schema(
  {
    name: String,
    username: String,
    avatar: String,
    account_name: String,
    is_account_admin: Boolean,
    is_admin: Boolean,
    email: String,
    password: String,
  },
  { collection: "Users" }
);

const Users = models.Users || model("Users", userSchema);

export default Users;
