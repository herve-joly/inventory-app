const express = require("express");
const router = express.Router();
const { Item } = require("../models");

// Middleware
// app.use(express.json());

// GET All
router.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }
});

// GET 1 item
router.get("/:title", async (req, res, next) => {
  try {
    const item = await Item.findOne({ where: { name: req.params.title } });
    res.send(item);
  } catch (error) {
    next(error);
  }
});

// ADD item
router.post("/", body, async (req, res, next) => {
  try {
    const item = await Item.create(req.body);
    if (!item) {
      throw new Error("Item not created");
    } else res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
