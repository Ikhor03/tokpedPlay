import express from "express";
import { addComment, getAllComments } from "../controller/commentList.js";

const router = express.Router();

router.post('/comment', addComment);
router.get('/comment', getAllComments);


export default router;
