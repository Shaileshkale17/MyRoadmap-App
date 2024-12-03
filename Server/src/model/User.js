import mongoose from "mongoose";
import bcrypt from "bcrypt";
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
    project: {
      type: Array,
      default: [],
    },
    topproject: {
      type: Array,
      default: [],
    },
    otp: {
      type: Number,
    },
    verified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

UserSchema.methods.ispasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

export const User = mongoose.model("User", UserSchema);
