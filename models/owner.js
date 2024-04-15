import mongoose from "mongoose";

const ownerSchema = mongoose.Schema(
  {
    fullname: {
      type: String,
      required: [true, "Please provide a full name"],
    },
    username: {
      type: String,
      required: [true, "Please provide a username"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Please provide a email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
    },
    // profile: {
    //     type: String, // cloudinary url
    //     required: true,
    // },
    projects: [
      {
        projectId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Project",
        },
      },
    ],
    isVerified: {
      type: Boolean,
      default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
  },
  { timestamps: true }
);

export default mongoose.model("Owner", ownerSchema);
