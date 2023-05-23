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
      clientId: id,
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
  if (Number(id)) {
    try {
      const product = await Product.findAll({ where: { internalId: id } });
      if (!product)
        return res
          .status(404)
          .json({ message: `Product id: ${id} doesn't existe` });
      res.json(product);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  } else {
    try {
      // this altenrative is to check by Name  encodeURIComponent("hola mundo") => hola%mundo
      const product = await Product.findAll({ where: { name: id } });
      if (!product)
        return res
          .status(404)
          .json({ message: `Product id: ${id} doesn't existe` });
      res.json(product);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }
};
// these delete using the internal id or name
export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  if (Number(id)) {
    try {
      await Product.destroy({
        where: {
          internalId: id,
        },
      });
      res.sendStatus(204);
    } catch (err) {
      return res.status(500).json([{ message: err.message }]);
    }
  } else {
    // this altenrative is to check by Name encodeURIComponent("hola mundo") => hola%mundo
    try {
      await Product.destroy({
        where: {
          name: id,
        },
      });
      res.sendStatus(204);
    } catch (err) {
      return res.status(500).json([{ message: err.message }]);
    }
  }
};
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findOne({ where: { internalId: id } });

    product.set(req.body);
    await product.save();
    return res.json(product);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
