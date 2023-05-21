import { Router } from "express";
import {
  getInvoices,
  createInvoice,
  getInvoiceById,
  deleteInvoice,
  updateInvoice,
} from "../controllers/invoices.controller.js";

const router = Router();

router.get("/invoices", getInvoices);
router.post("/invoices", createInvoice);
router.delete("/invoices/:id", deleteInvoice);
router.put("/invoices/:id", updateInvoice);
router.get("/invoices/:id", getInvoiceById);

export default router;
