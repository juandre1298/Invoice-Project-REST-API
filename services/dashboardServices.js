import { Invoice } from "../models/Invoices.js";
import { PurchaseOrders } from "../models/PurchaseOrders.js";
import { User } from "../models/Users.js";
import { Product } from "../models/Products.js";

export const generateData = async (userId, options) => {
  try {
    console.log(userId, options);
    // get users and passwords
    const user = await User.findOne({ where: { id: userId } });
    if (user.role == "admin") {
      console.log("is admin");
    }

    return { data: "conected!" };
  } catch (err) {
    return { message: err.message };
  }
};
