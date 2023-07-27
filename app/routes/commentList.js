import express from "express";
import { addComment, deleteComment, getAllComments, updateComment } from "../controller/commentList.js";

const router = express.Router();

router.post('/comment', addComment);
router.get('/comment', getAllComments);
router.put('/comment/:id', updateComment);
router.delete('/comment/:id', deleteComment);


export default router;
