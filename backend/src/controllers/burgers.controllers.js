const Burger = require('../models/burgers.models')

const getAllBurgers = async(req, res) => {

    try {
      const burgers = await Burger.find({})
      return res.status(200).json({
       message: 'get all burgers success',
        burgers
      })
     
      
    } catch (error) {
      throw new Error(error);
    }
}

const getBurgerById = async(req, res) => {
  const { id } = req.params
  try {
    const burgers = await Burger.findById(id)
    if (!burgers){
      res.status(404).json({
        message: "Product not found"
    })
    }
    res.status(202).json({
      message: 'Product obtained sucessfully',
      burgers })
  } catch (error) {
    throw new Error(error);
  }

}

const createBurger = async(req, res) => {
 const { title, price, description, image } = req.body
 
  try {
    const newBurger =  new Burger({
      title,
      price,
      description,
      image
    })
    const burgerSaved = await newBurger.save()
    res.json(burgerSaved)
  } catch (error) {
    throw new Error(error);
  }

}

const updateBurger = async(req, res) => {
  const { id } = req.params
  try {
    const updatedBurger = await Burger.findByIdAndUpdate(id, req.body, {
      new: true
    })
    if (!updatedBurger){
      return res.status(404).json({
        message: "Product not found"
    })
    }
    res.json(updatedBurger)
  } catch (error) {
    throw new Error(error);
  }

}

const deleteBurger = async(req ,res) => {
  const { id } = req.params
  try {
    const burgers = await Burger.findByIdAndDelete(id)
    if (!burgers){
      res.status(404).json({
        message: "Product not found"
    })
    }

    res.status(404).send('Deleted successfully')
  } catch (error) {
    throw new Error(error);
  }

}

module.exports = { getAllBurgers, getBurgerById, createBurger, updateBurger, deleteBurger}