const express = require('express');
const { getAllBurgers, getBurgerById, createBurger, updateBurger, deleteBurger } = require('../controllers/burgers.controllers');

const router = express.Router()

router.get('/', getAllBurgers)

router.get('/:id', getBurgerById)

router.post('/', createBurger)

router.put('/:id', updateBurger)

router.delete('/:id', deleteBurger)

module.exports = router;