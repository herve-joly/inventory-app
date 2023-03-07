const express = require("express");
const router = express.Router();
const { Item } = require("../models");

// Middleware
app.use(express.json());

// GET 1 item
router.get("/:title", async (req, res, next) => {
  try {
    const item = await Item.findOne({ where: { name: req.params.title } });
    res.json(item);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
