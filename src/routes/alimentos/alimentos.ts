import express from 'express';
import bodyParser from 'body-parser';
import { get } from '../../controllers/alimentos.controller';


const router = express.Router()
router.use(bodyParser.json());

  router.get("/", get)
  // router.put("/:id", verifyToken, update)
  // router.delete("/:id", verifyToken, remove)

export default router;