const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const ordersFilePath = path.join(__dirname, '../data/orders.json');

const readOrders = () => {
  try {
    const data = fs.readFileSync(ordersFilePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Unable to read orders data:', error);
    return [];
  }
};

const writeOrders = (orders) => {
  try {
    fs.writeFileSync(ordersFilePath, JSON.stringify(orders, null, 2), 'utf8');
  } catch (error) {
    console.error('Unable to write orders data:', error);
  }
};

router.get('/', (req, res) => {
  const orders = readOrders();
  res.json(orders);
});

router.post('/', (req, res) => {
  const { cartItems } = req.body;

  if (!Array.isArray(cartItems) || cartItems.length === 0) {
    return res.status(400).json({ error: 'Cart is empty or invalid.' });
  }

  const orders = readOrders();
  const newOrderId = `ORD-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const newOrder = {
    orderId: newOrderId,
    timestamp: new Date().toISOString(),
    items: cartItems.map((item) => ({
      id: item.id,
      title: item.title,
      price: item.price,
      quantity: item.quantity,
    })),
    total: Number(total.toFixed(2)),
  };

  orders.push(newOrder);
  writeOrders(orders);

  res.status(201).json({
    message: 'Order created successfully.',
    order: newOrder,
  });
});

module.exports = router;
