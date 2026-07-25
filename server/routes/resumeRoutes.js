import express from 'express';
import protect from '../middlewares/authMiddleware.js';
import { createResume, deleteResumes, getPublicResumeById, getResumeById, updateResume } from '../Controllers/resumeController.js';
import upload from '../configs/multer.js';


const resumeRouter = express.Router();

resumeRouter.post('/create', protect, createResume)
resumeRouter.put('/update', protect, upload.single('image'), updateResume) 
resumeRouter.delete('/delete/:resumeId', protect, deleteResumes)  
resumeRouter.get('/get/:resumeId', protect, getResumeById) 
resumeRouter.get('/public/:resumeId', getPublicResumeById)

export default resumeRouter