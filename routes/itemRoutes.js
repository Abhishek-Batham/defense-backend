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

// ✅ GET item by itemId
router.get('/custom/:itemId', async (req, res) => {
  try {
    const item = await Item.findOne({ itemId: req.params.itemId });
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
