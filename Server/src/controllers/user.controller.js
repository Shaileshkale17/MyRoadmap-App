import { User } from "../model/User.js";
import { ApiError } from "../util/ApiError.util.js";
import { ApiResponse } from "../util/ApiResponse.util.js";
import { asyncHandler } from "../util/asyncHandler.util.js";

export const createUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  try {
    // Validate input
    if (!email || !password) {
      return res.status(406).json({
        status: 406,
        massage: "Invalid email or password provided",
        success: false,
      });
    }

    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        status: 409,
        massage: "Email already exists",
        success: false,
      });
    }

    // Generate a username based on existing users
    const totalUsers = await User.countDocuments();
    const username = `user${totalUsers + 1}`;

    // Create the new user
    const newUser = await User.create({
      email,
      password,
      name: username,
    });

    // Respond with success
    return res
      .status(201)
      .json(new ApiResponse(201, newUser, "User created successfully", true));
  } catch (error) {
    return res.status(500).json({
      status: 500,
      massage: error.massage || "Error creating user",
      error,
      success: false,
    });
  }
});

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!(email && password)) {
    return res.status(406).json({
      status: 406,
      massage: "Invalid email or password provided",
      success: false,
    });
  }
});
