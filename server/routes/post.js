import express from 'express';

const router = express.Router();

router.get('/', () => {
    res.send('It works!')
    console.log(4)
});

export default router;

