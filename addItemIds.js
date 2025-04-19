const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Item = require('./models/itemModel');

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error("❌ Connection Error:", err);
  }
};

const addItemIds = async () => {
  await connectDB();
  const items = await Item.find();

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    item.itemId = (i + 1).toString().padStart(2, '0'); // 01, 02, 03...
    await item.save();
    console.log(`🆔 Updated item "${item.name}" with itemId: ${item.itemId}`);
  }

  mongoose.connection.close();
};

addItemIds();

