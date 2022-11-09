const Sale = require('../models/sale');
const User = require('../models/user');


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


module.exports = {
  createSale,
};