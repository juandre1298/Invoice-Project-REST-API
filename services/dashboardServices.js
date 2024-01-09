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
function chartData(arr, productPrices) {
  const response = arr
    .filter((e) => e.length > 0)
    .map((subClientN) => {
      const TotalMoney = subClientN.reduce((a, b) => {
        return a + b.total;
      }, 0);
      const TotalDiscount = subClientN.reduce((a, b) => {
        return a + (b.subtotal - b.total);
      }, 0);
      // products is an array with the object of each products and quantities purchase on each invoice
      const products = subClientN.map((e) => e.product);
      let productCount = [];
      if (products) {
        products.forEach((subArray) => {
          if (subArray) {
            subArray.forEach((product) => {
              // check if already exist
              if (
                productCount?.map((e) => e.productName).includes(product.name)
              ) {
                // if it exist we must change it
                const indexOfRepeated = productCount
                  ?.map((e) => e.productName)
                  .indexOf(product.name);
                let productQuantity =
                  productCount[indexOfRepeated].productQuantity;
                productQuantity += product.quantity;
                const miniObject = {
                  productName: product.name,
                  productQuantity,
                };
                productCount[indexOfRepeated] = miniObject;
              } else {
                // if it doesn't exist we must push it
                const miniObject = {
                  productName: product.name,
                  productQuantity: product.quantity,
                };
                productCount.push(miniObject);
              }
            });
          }
        });
      }
      // create totals

      productCount = productCount.map((e) => {
        return {
          ...e,
          productTotal: e.productQuantity * productPrices[e.productName],
        };
      });

      return {
        name: subClientN[0]?.userName,
        userId: subClientN[0]?.userId,
        TotalMoney,
        totalPurchases: subClientN.length,
        TotalDiscount,
        productCount,
      };
    });
  // calculate all
  let productsCount = [];
  response.forEach((data) => {
    // check if already exist
    data?.productCount.forEach((e) => {
      if (
        productsCount
          .map((subProductCount) => subProductCount.productName)
          .includes(e.productName)
      ) {
        // get index
        const indexOfRepeated = productsCount
          ?.map((e) => e.productName)
          .indexOf(e.productName);
        // replace data
        productsCount[indexOfRepeated] = {
          productName: e.productName,
          productTotal:
            e.productTotal + productsCount[indexOfRepeated].productTotal,
          productQuantity:
            e.productQuantity + productsCount[indexOfRepeated].productQuantity,
        };
      } else {
        productsCount.push({
          productName: e.productName,
          productTotal: e.productTotal,
          productQuantity: e.productQuantity,
        });
      }
    });
  });
  // integrate to main response array
  const totalMoneySum = response.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.TotalMoney;
  }, 0);
  const TotalDiscountSum = response.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.TotalDiscount;
  }, 0);
  const totalPurchasesSum = response.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.totalPurchases;
  }, 0);
  response.push({
    name: "all",
    userId: null,
    TotalMoney: totalMoneySum,
    TotalDiscount: TotalDiscountSum,
    totalPurchases: totalPurchasesSum,
    productCount: productsCount,
  });

  return response;
}
