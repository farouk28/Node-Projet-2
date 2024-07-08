const mongoose = require('mongoose');

const materialSchema = new mongoose.Schema({
  name: String,
  supplierId: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier' },
  supplierName: String
});

const Material = mongoose.model('Material', materialSchema);

const furnitureDesignSchema = new mongoose.Schema({
  name: String,
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  materials: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Material' }]
});

const FurnitureDesign = mongoose.model('FurnitureDesign', furnitureDesignSchema);

//...