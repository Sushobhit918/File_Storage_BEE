import multer from "multer";
import path from "path";

// Photos storage
const photoStorage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/photos"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

