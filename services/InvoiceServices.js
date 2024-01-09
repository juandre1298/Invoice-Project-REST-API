import { Invoice } from "../models/Invoices.js";
import { PurchaseOrders } from "../models/PurchaseOrders.js";
import { User } from "../models/Users.js";
import { Product } from "../models/Products.js";
import { createErrorResponse } from "./utils.js";
import { sequelize } from "../database/database.js";

const getTotalCount = async (start, end) => {
  start = Number(start);
  end = Number(end);

  try {
    const queryTotalCount = `
    SELECT COUNT(*) AS totalInvoices
    FROM invoices
  `;
    return await sequelize.query(queryTotalCount, {
      type: sequelize.QueryTypes.SELECT,
    });
  } catch (error) {
    console.error(error);
    throw createErrorResponse(error.message);
  }
};

const getAllInvoices = async (start, end) => {
  start = Number(start);
  end = Number(end);

  try {
    const queryInvoices = `
    SELECT
      i.*,
      u.name AS userName,
      JSON_ARRAYAGG(
        JSON_OBJECT(
          'productId', p.internalId,
          'productName', p.name,
          'quantity', po.quantity,
          'unitPrice', p.price
        )
      ) AS products
    FROM invoices i
    INNER JOIN users u ON i.userId = u.id
    LEFT JOIN purchaseOrders po ON i.id = po.invoiceId
    LEFT JOIN products p ON po.productId = p.internalId
    GROUP BY i.id
  `;

    return await sequelize.query(queryInvoices, {
      type: sequelize.QueryTypes.SELECT,
    });
  } catch (error) {
    console.error(error);
    throw createErrorResponse(error.message);
  }
};

const getInvoicesByRange = async (start, end) => {
  start = Number(start);
  end = Number(end);

  try {
    const queryInvoices = `
    SELECT
      i.*,
      u.name AS userName,
      JSON_ARRAYAGG(
        JSON_OBJECT(
          'productId', p.internalId,
          'productName', p.name,
          'quantity', po.quantity
        )
      ) AS products
    FROM invoices i
    INNER JOIN users u ON i.userId = u.id
    LEFT JOIN purchaseOrders po ON i.id = po.invoiceId
    LEFT JOIN products p ON po.productId = p.internalId
    WHERE i.id BETWEEN ? AND ?
    GROUP BY i.id
  `;

    return await sequelize.query(queryInvoices, {
      replacements: [start, end],
      type: sequelize.QueryTypes.SELECT,
    });
  } catch (error) {
    console.error(error);
    throw createErrorResponse(error.message);
  }
};

const getInvoiceById = async (id) => {
  try {
    const invoice = await Invoice.findOne({ where: { id } });
    // get all purchase orders of this invoice
    const purchaseOrders = await PurchaseOrders.findAll({
      where: { invoiceId: id },
    });
    if (!invoice) return { message: "Invoice doesn't existe" };
    // now this code block will get each product by id
    const objectsPurchasedDisplay = await Promise.all(
      purchaseOrders.map(async (productsPurchased) => {
        // get the product by name
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

    const responce = {
      ...invoice.dataValues,
      userName: user.dataValues.name,
      product: objectsPurchasedDisplay,
    };
    return responce;
  } catch (error) {
    console.error(error);
    throw createErrorResponse(error.message);
  }
};

export default {
  getTotalCount,
  getAllInvoices,
  getInvoicesByRange,
  getInvoiceById,
};
