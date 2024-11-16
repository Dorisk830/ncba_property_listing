// import express from 'express';

// const router = express.Router();
// router.get('/test', (req, res)=>{
//     res.json({
//         message:'Hello world'
//     });
// }
// );

// export default router;
import express from 'express';
import {test} from '../controllers/user.controller.js';

const router = express.Router();

router.get('/test', test);

export default router;