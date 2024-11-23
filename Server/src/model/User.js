import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      default: "user1",
    },
    email: {
      type: String,
      default: "user1@example.com",
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
    },
    phone: {
      type: String,
    },
    lastLogin: {
      type: String,
    },
    Contributors: {
      type: Array,
      default: [],
    },
    notifications: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", UserSchema);
