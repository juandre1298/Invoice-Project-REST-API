import { Product } from "../models/Products.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();

    res.json(products);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
export const createProduct = async (req, res) => {
  try {
    const { id, name, price } = req.body;
    const newProduct = await Product.create({
      id,
      name,
      price,
    });
    res.json(newProduct);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findOne({ where: { id } });

    if (!product)
      return res
        .status(404)
        .json({ message: `Product id: ${id} doesn't existe` });
    res.json(product);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (err) {
    return res.status(500).json([{ message: err.message }]);
  }
};
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findOne({ where: { id } });

    product.set(req.body);
    await product.save();
    return res.json(product);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
