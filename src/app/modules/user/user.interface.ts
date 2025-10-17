import mongoose, { Schema, Types } from "mongoose";

export interface IUser {
  id: Types.ObjectId;
  name: string;
  email: string;
  age: number;
}

export const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model<IUser>("User", userSchema);
