import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  const data = [
    {
      id: 1,
      name: "동북고",
    },
  ];
  return res.status(200).json(data);
});

export default router;
