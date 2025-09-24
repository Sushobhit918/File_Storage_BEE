import File from "../models/File.js";

// Upload photo
export const uploadPhoto = async (req, res) => {
  try {
    const file = new File({
      filename: req.file.filename,
      path: req.file.path,
      size: req.file.size,
      type: req.file.mimetype,
      owner: req.user._id,
    });
    await file.save();
    res.json({ message: "Photo uploaded", file });
  } catch (err) {
    res.status(500).json({ message: "Upload failed" });
  }
};

// Upload file
export const uploadFile = async (req, res) => {
  try {
    const file = new File({
      filename: req.file.filename,
      path: req.file.path,
      size: req.file.size,
      type: req.file.mimetype,
      owner: req.user._id,
    });
    await file.save();
    res.json({ message: "File uploaded", file });
  } catch (err) {
    res.status(500).json({ message: "Upload failed" });
  }
};

// Get all user files
export const getFiles = async (req, res) => {
  try {
    const files = await File.find({ owner: req.user._id });
    res.json(files);
  } catch (err) {
    res.status(500).json({ message: "Error fetching files" });
  }
};

// Download file
export const downloadFile = async (req, res) => {
  try {
    const file = await File.findById(req.params.id);
    if (!file) return res.status(404).json({ message: "File not found" });

    res.download(file.path, file.filename);
  } catch (err) {
    res.status(500).json({ message: "Download failed" });
  }
};

// Delete file
import fs from "fs";
export const deleteFile = async (req, res) => {
  try {
    const file = await File.findById(req.params.id);
    if (!file) return res.status(404).json({ message: "File not found" });

    fs.unlinkSync(file.path);
    await File.findByIdAndDelete(req.params.id);

    res.json({ message: "File deleted" });
  } catch (err) {
    res.status(500).json({ message: "Delete failed" });
  }
};
