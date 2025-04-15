const express = require('express');
const router = express.Router();
const Item = require('../models/itemModel');

// GET all items
router.get('/', async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

// POST new item
router.post('/', async (req, res) => {
  const newItem = new Item(req.body);
  const savedItem = await newItem.save();
  res.json(savedItem);
});

// DELETE all items
router.delete('/', async (req, res) => {
  await Item.deleteMany({});
  res.json([]);
});

module.exports = router;
