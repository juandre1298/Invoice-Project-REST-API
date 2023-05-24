import { Invoice } from "../models/Invoices.js";
import { PurchaseOrders } from "../models/PurchaseOrders.js";
import { User } from "../models/Users.js";
import { Product } from "../models/Products.js";

export const servicesGetInvoiceById = async (id) => {
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
  } catch (err) {
    return { message: err.message };
  }
};
