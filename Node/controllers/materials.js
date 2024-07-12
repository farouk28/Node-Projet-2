const { Material } = require('../models');

exports.index = async (req, res) => {
  try {
    const materials = await Material.find().populate('supplierId');
    res.render('materials', { materials });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching materials');
  }
};

exports.create = async (req, res) => {
  try {
    const { name, supplierId } = req.body;
    if (!name ||!supplierId) {
      throw new Error('Invalid request data');
    }
    const material = new Material({ name, supplierId });
    await material.save();
    res.redirect('/materials');
  } catch (err) {
    console.error(err);
    res.status(400).send('Error creating material');
  }
};

exports.edit = async (req, res) => {
  try {
    const id = req.params.id;
    const material = await Material.findById(id).populate('supplierId');
    if (!material) {
      throw new Error('Material not found');
    }
    res.render('materials-edit', { material });
  } catch (err) {
    console.error(err);
    res.status(404).send('Material not found');
  }
};

exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, supplierId } = req.body;
    if (!name ||!supplierId) {
      throw new Error('Invalid request data');
    }
    const material = await Material.findByIdAndUpdate(id, { name, supplierId });
    if (!material) {
      throw new Error('Material not found');
    }
    res.redirect('/materials');
  } catch (err) {
    console.error(err);
    res.status(400).send('Error updating material');
  }
};

exports.delete = async (req, res) => {
  try {
    const id = req.params.id;
    await Material.findByIdAndRemove(id);
    res.redirect('/materials');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error deleting material');
  }
};