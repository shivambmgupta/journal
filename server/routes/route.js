import express from 'express'
import { 
    registerUser, 
    userLogin, 
    userDetails, 
    createJournal, 
    getAllJournals,
    deleteJournal,
    updateJournal
 } from '../controllers/user.js';
import { authenticateRequest } from '../controllers/auth.js'; 

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', userLogin);
router.get('/journals', authenticateRequest, getAllJournals);
router.get('/details', authenticateRequest, userDetails);
router.post('/journal', authenticateRequest, createJournal);
router.patch('/journal/:id', authenticateRequest, updateJournal);
router.delete('/journal/:id', authenticateRequest, deleteJournal);

export default router;
