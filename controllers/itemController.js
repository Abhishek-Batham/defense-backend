const Item = require('../models/itemModel');

// Get all items
exports.getItems = async (req, res) => {
  const items = await Item.find();
  res.json(items);
};

// Create a new item
exports.createItem = async (req, res) => {
  const newItem = new Item(req.body);
  const savedItem = await newItem.save();
  res.status(201).json(savedItem);
};
