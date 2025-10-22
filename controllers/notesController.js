import Note from "../models/Notes.js";

// @desc Get all notes
export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find({ userId: req.user._id }).sort({ updatedAt: -1 });
    res.json({ success: true, notes });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc Create note
export const createNote = async (req, res) => {
  const { title, content } = req.body;

  try {
    const note = await Note.create({ userId: req.user._id, title, content });
    res.status(201).json({ success: true, message: "Note created successfully", note });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc Get single note
export const getNoteById = async (req, res) => {
  try {
    const note = await Note.findOne({ _id: req.params.id, userId: req.user._id });
    if (!note) return res.status(404).json({ success: false, message: "Note not found" });
    res.json({ success: true, note });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc Update note
export const updateNote = async (req, res) => {
  try {
    const note = await Note.findOneAndUpdate(
      { _id: req.params.id, userId: req.user._id },
      req.body,
      { new: true }
    );
    if (!note) return res.status(404).json({ success: false, message: "Note not found" });
    res.json({ success: true, message: "Note updated successfully", note });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc Delete note
export const deleteNote = async (req, res) => {
  try {
    const note = await Note.findOneAndDelete({ _id: req.params.id, userId: req.user._id });
    if (!note) return res.status(404).json({ success: false, message: "Note not found" });
    res.json({ success: true, message: "Note deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
