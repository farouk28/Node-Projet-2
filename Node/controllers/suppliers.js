const { Supplier } = require('../models');

exports.index = async (req, res) => {
  try {
    const suppliers = await Supplier.find();
    res.render('suppliers', { suppliers });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching suppliers');
  }
};

exports.create = async (req, res) => {
  try {
    const { name, address } = req.body;
    if (!name ||!address) {
      throw new Error('Invalid request data');
    }
    const supplier = new Supplier({ name, address });
    await supplier.save();
    res.redirect('/suppliers');
  } catch (err) {
    console.error(err);
    res.status(400).send('Error creating supplier');
  }
};

exports.edit = async (req, res) => {
  try {
    const id = req.params.id;
    const supplier = await Supplier.findById(id);
    if (!supplier) {
      throw new Error('Supplier not found');
    }
    res.render('suppliers-edit', { supplier });
  } catch (err) {
    console.error(err);
    res.status(404).send('Supplier not found');
  }
};

exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, address } = req.body;
    if (!name ||!address) {
      throw new Error('Invalid request data');
    }
    const supplier = await Supplier.findByIdAndUpdate(id, { name, address });
    if (!supplier) {
      throw new Error('Supplier not found');
    }
    res.redirect('/suppliers');
  } catch (err) {
    console.error(err);
    res.status(400).send('Error updating supplier');
  }
};

exports.delete = async (req, res) => {
  try {
    const id = req.params.id;
    await Supplier.findByIdAndRemove(id);
    res.redirect('/suppliers');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error deleting supplier');
  }
};