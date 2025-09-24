import multer from "multer";
import path from "path";

// Photos storage
const photoStorage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/photos"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

// Files storage
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/files"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

export const uploadPhoto = multer({ storage: photoStorage });
export const uploadFile = multer({ storage: fileStorage });