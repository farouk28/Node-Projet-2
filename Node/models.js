const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  address: { type: String, required: true }
});

const Supplier = mongoose.model('Supplier', supplierSchema);

const materialSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  supplierId: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier', required: true },
  supplierName: { type: String, required: true }
});

const Material = mongoose.model('Material', materialSchema);

const furnitureDesignSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  materials: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Material', required: true }]
});

const FurnitureDesign = mongoose.model('FurnitureDesign', furnitureDesignSchema);

// Export the models
module.exports = {
  Supplier,
  Material,
  FurnitureDesign
};