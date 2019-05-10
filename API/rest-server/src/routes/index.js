import express from 'express';

import authRouter from '../components/auth/authRouter';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/test', (req, res) => {
  console.log('server reveive a request, this is the body', req.body);
});

export default router;
