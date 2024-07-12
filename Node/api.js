const express = require('express');
const router = express.Router();
const { Material, FurnitureDesign } = require('./models');

// GET /api/materials
router.get('/materials', async (req, res) => {
  const materials = await Material.find().populate('supplierId');
  res.json(materials);
});

// GET /api/furniture-designs
router.get('/furniture-designs', async (req, res) => {
  const furnitureDesigns = await FurnitureDesign.find().populate('categoryId');
  res.json(furnitureDesigns);
});

// POST /api/furniture-designs
router.post('/furniture-designs', async (req, res) => {
  const { name, categoryId, materials } = req.body;
  const furnitureDesign = new FurnitureDesign({ name, categoryId, materials });
  await furnitureDesign.save();
  res.json(furnitureDesign);
});

module.exports = router;