const Sale = require('../models/sale');
const User = require('../models/user');

// yaat
const createSale = async (req, res) => {
  const content = req.body;
  const user = await User.findById(content.userId);
  
  try {
    const sale = await Sale.create({ user: content.userId,  ...content })
    
    user.sales = user.sales.concat(sale._id)
    await user.save();

    return res.status(201).json({ data: sale });
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
};

// yaat
const getAllSale = async (req, res) => {
  const userId = req.body.userId;

  try {
    const sales = await Sale.find({ user: userId });

    return res.status(201).json({ data: sales });
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
};

// yaat
const getOneSale = async (req, res) => {
  const id = req.params.id
  const userId = req.body.userId;

  try {
    const sale = await Sale.findOne({ _id: id, user: userId });

    if (!sale) {
      return res.status(400).json({ message: 'sale not found' });
    }
    return res.status(201).json({ data: sale });
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
};

// yaat
const updateOneSale = async (req, res) => {
  const id = req.params.id
  const userId = req.body.userId;
  const content = req.body

  try {
    const sale = await Sale.findOneAndUpdate(
      { _id: id, user: userId },
      content,
      { new: true }
    );

    if (!sale) {
      return res.status(400).json({ message: 'sale not found' });
    }
    return res.status(201).json({ data: sale });
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
};

// yaat
const deleteOneSale = async (req, res) => {
  const id = req.params.id
  const userId = req.body.userId;

  try {
    const sale = await Sale.findOneAndRemove({ _id: id, user: userId });

    if (!sale) {
      return res.status(400).json({ message: 'sale not found' });
    }
    return res.status(201).json({ message: 'deleted successfully', data: sale });
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
};

// yaat
module.exports = {
  createSale,
  getAllSale,
  getOneSale,
  updateOneSale,
  deleteOneSale
};