const Material = require('../models/Material');

exports.index = async (req, res) => {
  const materials = await Material.find().populate('supplierId');
  res.render('materials', { materials });
};

exports.create = async (req, res) => {
  const { name, supplierId } = req.body;
  const material = new Material({ name, supplierId });
  await material.save();
  res.redirect('/materials');
};

exports.edit = async (req, res) => {
  const id = req.params.id;
  const material = await Material.findById(id).populate('supplierId');
  res.render('materials-edit', { material });
};

exports.update = async (req, res) => {
  const id = req.params.id;
  const { name, supplierId } = req.body;
  const material = await Material.findByIdAndUpdate(id, { name, supplierId });
  res.redirect('/materials');
};

exports.delete = async (req, res) => {
  const id = req.params.id;
  await Material.findByIdAndRemove(id);
  res.redirect('/materials');
};