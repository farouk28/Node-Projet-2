const FurnitureDesign = require('../models/FurnitureDesign');

exports.index = async (req, res) => {
  const furnitureDesigns = await FurnitureDesign.find().populate('categoryId').populate('materials');
  res.render('furniture-designs', { furnitureDesigns });
};

exports.create = async (req, res) => {
  const { name, categoryId, materials } = req.body;
  const furnitureDesign = new FurnitureDesign({ name, categoryId, materials });
  await furnitureDesign.save();
  res.redirect('/furniture-designs');
};

exports.edit = async (req, res) => {
  const id = req.params.id;
  const furnitureDesign = await FurnitureDesign.findById(id).populate('categoryId').populate('materials');
  res.render('furniture-designs-edit', { furnitureDesign });
};

exports.update = async (req, res) => {
  const id = req.params.id;
  const { name, categoryId, materials } = req.body;
  const furnitureDesign = await FurnitureDesign.findByIdAndUpdate(id, { name, categoryId, materials });
  res.redirect('/furniture-designs');
};

exports.delete = async (req, res) => {
  const id = req.params.id;
  await FurnitureDesign.findByIdAndRemove(id);
  res.redirect('/furniture-designs');
};