import { Invoice } from "../models/Invoices.js";
import { PurchaseOrders } from "../models/PurchaseOrders.js";
import { User } from "../models/Users.js";
import { Product } from "../models/Products.js";

export const getInvoices = async (req, res) => {
  try {
    // get all invoices
    const invoices = await Invoice.findAll();
    // create a response to send to the frontend

    // for invoice the code will find the purchase orders
    const response = await Promise.all(
      invoices.map(async (invoice, i) => {
        // we get the purchase orders of each invoice, it's an array...
        const invoicePurchaseOrders = await PurchaseOrders.findAll({
          where: { invoiceId: invoice.id },
        });
        // for each purchase order it returns the product id and the quantity
        const productsByIndexObject = invoicePurchaseOrders.map(
          (purchaseOrder) => {
            return {
              productId: purchaseOrder.dataValues.productId,
              quantity: purchaseOrder.dataValues.quantity,
            };
          }
        );
        // new this code block will get each product by id
        const objectsPurchasedDisplay = await Promise.all(
          productsByIndexObject.map(async (productsPurchased) => {
            // get the product by id
            const productsDisplayed = await Product.findOne({
              where: {
                id: productsPurchased.productId,
              },
            });
            return {
              ...productsDisplayed.dataValues,
              quantity: productsPurchased.quantity,
            };
          })
        );
        return {
          ...invoice.dataValues,
          product: objectsPurchasedDisplay,
        };
      })
    );
    res.json(response);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
export const createInvoice = async (req, res) => {
  const { userId, discount, products } = req.body;
  const createdInvoice = await Invoice.create({
    userId,
    discount,
  });
  const purchaseOrders = await Promise.all(
    products.map(async (product) => {
      const purchaseOrderProduct = await Product.findOne({
        where: {
          name: product.name,
        },
      });
      const createdPurchaseOrder = await PurchaseOrders.create({
        quantity: product.quantity,
        productId: purchaseOrderProduct.dataValues.id,
        invoiceId: createdInvoice.dataValues.id,
      });
      return createdPurchaseOrder;
    })
  );
  res.status(201).send({ message: "invoice crated successfully" });
};
export const getInvoiceById = async (req, res) => {
  const { id } = req.params;
  try {
    const invoice = await Invoice.findOne({ where: { id } });
    if (!invoice)
      return res.status(404).json({ message: "Invoice doesn't existe" });
    res.json(invoice);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
export const deleteInvoice = async (req, res) => {
  try {
    const { id } = req.params;
    await Invoice.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (err) {
    return res.status(500).json([{ message: err.message }]);
  }
};
export const updateInvoice = async (req, res) => {
  try {
    const { id } = req.params;

    const invoice = await Invoice.findOne({ where: { id } });

    invoice.set(req.body);
    await invoice.save();
    return res.json(invoice);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
