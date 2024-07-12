const { FurnitureDesign } = require('../models');

exports.index = async (req, res) => {
  try {
    const furnitureDesigns = await FurnitureDesign.find().populate('categoryId').populate('materials');
    res.render('furniture-designs', { furnitureDesigns });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching furniture designs');
  }
};

exports.create = async (req, res) => {
  try {
    const { name, categoryId, materials } = req.body;
    if (!name ||!categoryId ||!materials) {
      throw new Error('Invalid request data');
    }
    const furnitureDesign = new FurnitureDesign({ name, categoryId, materials });
    await furnitureDesign.save();
    res.redirect('/furniture-designs');
  } catch (err) {
    console.error(err);
    res.status(400).send('Error creating furniture design');
  }
};

exports.edit = async (req, res) => {
  try {
    const id = req.params.id;
    const furnitureDesign = await FurnitureDesign.findById(id).populate('categoryId').populate('materials');
    if (!furnitureDesign) {
      throw new Error('Furniture design not found');
    }
    res.render('furniture-designs-edit', { furnitureDesign });
  } catch (err) {
    console.error(err);
    res.status(404).send('Furniture design not found');
  }
};

exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, categoryId, materials } = req.body;
    if (!name ||!categoryId ||!materials) {
      throw new Error('Invalid request data');
    }
    const furnitureDesign = await FurnitureDesign.findByIdAndUpdate(id, { name, categoryId, materials });
    if (!furnitureDesign) {
      throw new Error('Furniture design not found');
    }
    res.redirect('/furniture-designs');
  } catch (err) {
    console.error(err);
    res.status(400).send('Error updating furniture design');
  }
};

exports.delete = async (req, res) => {
  try {
    const id = req.params.id;
    await FurnitureDesign.findByIdAndRemove(id);
    res.redirect('/furniture-designs');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error deleting furniture design');
  }
};