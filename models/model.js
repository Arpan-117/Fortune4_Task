import mongoose from "mongoose";

const { Schema, SchemaTypes, model } = mongoose;

const technicalSchema = new mongoose.Schema({
  tspec: String,
  tunit: String
});

const orderingSchema = new mongoose.Schema({
  cat: String,
  desc: String,
  pack: String
});

const connectionSchema = new mongoose.Schema({
  cspec: String,
  cunit: String
});

const dimensionSchema = new mongoose.Schema({
  dspec: String,
  dunit: String
});

const productSchema = new mongoose.Schema({
  title: String,
  heading: String,
  content: String,
  technicals: [technicalSchema],
  orderings: [orderingSchema],
  connections: [connectionSchema],
  dimensions: [dimensionSchema]
});

const Product = mongoose.model('Product', productSchema);
export default Product;


