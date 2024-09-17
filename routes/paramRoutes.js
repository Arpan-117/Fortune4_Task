import express from "express";
import { createTechnicalRowController, createOrderingRowController, createConnectionRowController, createDimensionRowController,findIdController } from "../controller/rowController.js"

const router = express.Router();

router.post('/add-technical/:id', createTechnicalRowController);
router.post('/add-ordering/:id', createOrderingRowController);
router.post('/add-connection/:id', createConnectionRowController);
router.post('/add-dimension/:id', createDimensionRowController);
router.get('/get-id/:id', findIdController)

export default router;