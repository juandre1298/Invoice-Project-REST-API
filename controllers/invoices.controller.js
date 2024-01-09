import { Invoice } from "../models/Invoices.js";
import { PurchaseOrders } from "../models/PurchaseOrders.js";
import { User } from "../models/Users.js";
import { Product } from "../models/Products.js";
import { sequelize } from "../database/database.js";
import { generateData } from "../services/dashboardServices.js";

// import services

import invoiceService from "../services/InvoiceServices.js";

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
        // for each purchase order it returns the product internalId and the quantity
        const productsByIndexObject = invoicePurchaseOrders.map(
          (purchaseOrder) => {
            return {
              productId: purchaseOrder.dataValues.productId,
              quantity: purchaseOrder.dataValues.quantity,
            };
          }
        );
        // now this code block will get each product by id
        const objectsPurchasedDisplay = await Promise.all(
          productsByIndexObject.map(async (productsPurchased) => {
            // get the product by id
            const productsDisplayed = await Product.findOne({
              where: {
                internalId: productsPurchased.productId,
              },
            });
            return {
              ...productsDisplayed.dataValues,
              quantity: productsPurchased.quantity,
            };
          })
        );
        // get user by userId
        const user = await User.findOne({ where: { id: invoice.userId } });

        return {
          ...invoice.dataValues,
          userName: user.dataValues.name,
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
  const { userId, discount, products, dateOfEntry, subtotal, image, total } =
    req.body;

  // create invoice
  const createdInvoice = await Invoice.create({
    userId,
    discount,
    dateOfEntry,
    subtotal,
    image,
    total,
  });
  // create purchase Order
  const purchaseOrders = await Promise.all(
    products.map(async (product) => {
      const purchaseOrderProduct = await Product.findOne({
        where: {
          name: product.name,
        },
      });
      const createdPurchaseOrder = await PurchaseOrders.create({
        quantity: product.quantity,
        productId: purchaseOrderProduct.dataValues.internalId,
        invoiceId: createdInvoice.dataValues.id,
      });
      return createdPurchaseOrder;
    })
  );
  res.status(201).send({ message: "invoice created successfully" });
};
export const getInvoiceById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await invoiceService.getInvoiceById(id);
    res.json(response);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getInvoiceByRange = async (req, res) => {
  let { start, end } = req.params;
  start = Number(start);
  end = Number(end);

  try {
    const [invoices, totalCountResult] = await Promise.all([
      invoiceService.getInvoicesByRange(start, end),
      invoiceService.getTotalCount(start, end),
    ]);

    const totalInvoices = totalCountResult[0].totalInvoices;

    res.json({ invoices, totalInvoices });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getInvoiceByuserByRange = async (req, res) => {
  let { userId, start, end } = req.params;
  start = Number(start);
  end = Number(end);

  try {
    const [invoices, totalCountResult] = await Promise.all([
      invoiceService.getInvoicesByRangeAndUserId(start, end, userId),
      invoiceService.getTotalCountByUserId(userId),
    ]);

    const totalInvoices = totalCountResult[0].totalInvoices;

    res.json({ invoices, totalInvoices });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteInvoice = async (req, res) => {
  try {
    const { id } = req.params;
    await PurchaseOrders.destroy({
      where: { invoiceId: id },
    });
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

export const getDashboardData = async (req, res) => {
  try {
    console.log(req.params.userId);
    const data = await generateData(req.params.userId, req.query);
    return res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
