const Supplier = require('../models/Supplier');

exports.index = async (req, res) => {
  const suppliers = await Supplier.find();
  res.render('suppliers', { suppliers });
};

exports.create = async (req, res) => {
  const { name, address } = req.body;
  const supplier = new Supplier({ name, address });
  await supplier.save();
  res.redirect('/suppliers');
};

exports.edit = async (req, res) => {
  const id = req.params.id;
  const supplier = await Supplier.findById(id);
  res.render('suppliers-edit', { supplier });
};

exports.update = async (req, res) => {
  const id = req.params.id;
  const { name, address } = req.body;
  const supplier = await Supplier.findByIdAndUpdate(id, { name, address });
  res.redirect('/suppliers');
};

exports.delete = async (req, res) => {
  const id = req.params.id;
  await Supplier.findByIdAndRemove(id);
  res.redirect('/suppliers');
};