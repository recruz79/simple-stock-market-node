import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  return res.render('index', { title: 'Create trade resource' });
});


export default router;
