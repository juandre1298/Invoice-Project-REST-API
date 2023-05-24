import { Router } from "express";
import {
  getInvoices,
  createInvoice,
  getInvoiceById,
  deleteInvoice,
  getInvoiceByRange,
  updateInvoice,
} from "../controllers/invoices.controller.js";

const router = Router();

router.get("/invoices", getInvoices);
router.post("/invoices", createInvoice);
router.delete("/invoices/:id", deleteInvoice);
router.put("/invoices/:id", updateInvoice);
router.get("/invoices/:id", getInvoiceById);
router.get("/invoices/:startId/:endId", getInvoiceByRange);

export default router;
