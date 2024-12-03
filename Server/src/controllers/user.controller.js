import { User } from "../model/User.js";
import { ApiError } from "../util/ApiError.util.js";
import { ApiResponse } from "../util/ApiResponse.util.js";
import { asyncHandler } from "../util/asyncHandler.util.js";
import JWT from "jsonwebtoken";
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
  try {
    if (!(email && password)) {
      return res.status(406).json({
        status: 406,
        massage: "Invalid email or password provided",
        success: false,
      });
    }
    const userdata = await User.findOne({ email });
    if (!userdata) {
      return res.status(400).json({
        status: 400,
        massage: "User not found or has expired",
        success: false,
      });
    }

    let JWTToken = JWT.sign(
      { id: userdata._id, name: userdata.name },
      process.env.JWTSECRETKEY,
      { expiresIn: "10d" }
    );

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          { JWTToken, userdata },
          "user login successfull",
          true
        )
      );
  } catch (error) {
    return res.status(500).json({
      status: 500,
      massage: error.massage || "Error login user",
      error,
      success: false,
    });
  }
});

export const otp = asyncHandler(async (req, res) => {
  const { email } = req.body;

  // Validate email presence
  if (!email) {
    return res.status(400).json({
      status: 400,
      message: "Email is required",
      success: false,
    });
  }

  // Find user by email
  const userdata = await User.findOne({ email });

  if (!userdata) {
    return res.status(404).json({
      status: 404,
      message: "User not found or has expired",
      success: false,
    });
  }

  // Generate OTP
  const otp = Math.floor(1000 + Math.random() * 9000);

  // Update the user's OTP in the database
  const setOTPDB = await User.findByIdAndUpdate(
    userdata._id,
    { otp, otpExpiry: Date.now() + 10 * 60 * 1000 }, // Set expiry for 10 minutes
    { new: true } // Return the updated document
  );

  if (!setOTPDB) {
    return res.status(500).json({
      status: 500,
      message: "Failed to set OTP",
      success: false,
    });
  }

  console.log(`Generated OTP for ${email}:`, otp);

  // Respond with success
  res.status(200).json({
    status: 200,
    message: "OTP generated successfully",
    otp, // Include OTP only if needed; otherwise, avoid exposing it
    success: true,
  });
});

export const chackOTP = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { otp } = req.body;

  if (!id) {
    return res.status(404).json({
      status: 404,
      message: "User not found ",
      success: false,
    });
  }
  if (!otp) {
    return res.status(404).json({
      status: 404,
      message: "please enter your OTP ",
      success: false,
    });
  }
  const userData = await User.findById(id);
  if (!userData) {
    return res.status(404).json({
      status: 404,
      message: "User data not found ",
      success: false,
    });
  }

  console.log("userData", userData);
  console.log("userData.otp", userData.otp);
  console.log("otp", otp);

  if (otp === userData.otp) {
    let setOTPDB = await User.findByIdAndUpdate(
      userData._id,
      {
        verified: true,
      },
      { new: true } // Return the updated document
    );
    return res.status(200).json(new ApiResponse(200, setOTPDB, "Okay", true));
  } else {
    let setOTPDB = await User.findByIdAndUpdate(
      userData._id,
      {
        verified: true,
      },
      { new: true } // Return the updated document
    );
    return res.status(401).json({
      status: 401,
      message: "OTP is not matching please try again",
      success: false,
    });
  }
});
