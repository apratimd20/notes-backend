import express from "express";
import {
  getNotes,
  createNote,
  getNoteById,
  updateNote,
  deleteNote,
} from "../controllers/notesController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// router.use(authMiddleware); 
 
router.get("/", authMiddleware, getNotes);
router.post("/", createNote);
router.get("/:id", getNoteById);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;


// import express from "express";
// import {
//   getNotes,
//   createNote,
//   getNoteById,
//   updateNote,
//   deleteNote,
// } from "../controllers/notesController.js";
// import authMiddleware from "../middleware/authMiddleware.js";

// const router = express.Router();

// /**
//  * @swagger
//  * tags:
//  *   name: Notes
//  *   description: Notes management APIs
//  */

// /**
//  * @swagger
//  * /api/notes:
//  *   get:
//  *     summary: Get all notes for the authenticated user
//  *     tags: [Notes]
//  *     security:
//  *       - bearerAuth: []
//  *     responses:
//  *       200:
//  *         description: Successfully fetched user notes
//  *       401:
//  *         description: Unauthorized - missing or invalid token
//  */
// router.get("/", authMiddleware, getNotes);

// /**
//  * @swagger
//  * /api/notes:
//  *   post:
//  *     summary: Create a new note
//  *     tags: [Notes]
//  *     security:
//  *       - bearerAuth: []
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             required:
//  *               - title
//  *               - content
//  *             properties:
//  *               title:
//  *                 type: string
//  *                 example: Meeting Notes
//  *               content:
//  *                 type: string
//  *                 example: Discussed project milestones and next steps.
//  *     responses:
//  *       201:
//  *         description: Note created successfully
//  *       400:
//  *         description: Invalid input data
//  */
// router.post("/", authMiddleware, createNote);

// /**
//  * @swagger
//  * /api/notes/{id}:
//  *   get:
//  *     summary: Get a single note by ID
//  *     tags: [Notes]
//  *     security:
//  *       - bearerAuth: []
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         schema:
//  *           type: string
//  *         description: Note ID
//  *     responses:
//  *       200:
//  *         description: Successfully retrieved note
//  *       404:
//  *         description: Note not found
//  */
// router.get("/:id", authMiddleware, getNoteById);

// /**
//  * @swagger
//  * /api/notes/{id}:
//  *   put:
//  *     summary: Update a note by ID
//  *     tags: [Notes]
//  *     security:
//  *       - bearerAuth: []
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         schema:
//  *           type: string
//  *         description: Note ID
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             properties:
//  *               title:
//  *                 type: string
//  *                 example: Updated Note Title
//  *               content:
//  *                 type: string
//  *                 example: Updated note content goes here.
//  *     responses:
//  *       200:
//  *         description: Note updated successfully
//  *       404:
//  *         description: Note not found
//  */
// router.put("/:id", authMiddleware, updateNote);

// /**
//  * @swagger
//  * /api/notes/{id}:
//  *   delete:
//  *     summary: Delete a note by ID
//  *     tags: [Notes]
//  *     security:
//  *       - bearerAuth: []
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         schema:
//  *           type: string
//  *         description: Note ID
//  *     responses:
//  *       200:
//  *         description: Note deleted successfully
//  *       404:
//  *         description: Note not found
//  */
// router.delete("/:id", authMiddleware, deleteNote);

// export default router;
