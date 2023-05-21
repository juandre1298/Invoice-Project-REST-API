import { User } from "./Users.js";
import { Product } from "./Products.js";
import { Invoice } from "./Invoices.js";
import { PurchaseOrders } from "./PurchaseOrders.js";

// relations 1:n with users

// to create a relation of 1:n
User.hasMany(Invoice, { as: "invoices", foreignKey: "userId" });
Invoice.belongsTo(User, { as: "user", foreignKey: "userId" });
Product.hasMany(PurchaseOrders, {
  as: "purcaseOrders",
  foreignKey: "productId",
});
PurchaseOrders.belongsTo(Product, { as: "products", foreignKey: "productId" });
Invoice.hasMany(PurchaseOrders, {
  as: "purchaseOrder",
  foreignKey: "invoiceId",
});
PurchaseOrders.belongsTo(Invoice, { as: "invoice", foreignKey: "invoiceId" });

// relationshit table n:n
// Product.belongsToMany(Invoice, { through: "InvoicesProducts" });
// Invoice.belongsToMany(Product, { through: "InvoicesProducts" });
