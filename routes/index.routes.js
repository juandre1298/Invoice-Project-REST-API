import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
  try {
    res.json({ message: `API UP` });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

export default router;
