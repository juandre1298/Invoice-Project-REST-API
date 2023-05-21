import { createInvoice } from "./controllers/invoices.controller.js";
import { createProduct } from "./controllers/products.controller.js";
import { createUser } from "./controllers/users.controller.js";

export const users = [
  {
    name: "juan",
    second_name: "salas",
    email: "example@email.com",
    password: "123456",
    status: "admin",
  },
  {
    name: "maria",
    second_name: "lo que sea",
    email: "example2@email.com",
    password: "123456",
    status: "normal",
  },
  {
    name: "robert",
    second_name: "apellido",
    email: "1234@email.com",
    password: "123456",
    status: "normal",
  },
];

export const products = [
  {
    name: "product A",
    category: "Category A",
    brand: "Brand A",
    quantity: 10,
    price: 10000,
  },
  {
    name: "product B",
    category: "Category B",
    brand: "Brand B",
    quantity: 10,
    price: 20000,
  },
  {
    name: "product C",
    category: "Category C",
    brand: "Brand C",
    quantity: 30,
    price: 1500,
  },
];

export const invoices = [
  {
    userId: 2,
    discount: 0.3,
    products: [
      {
        name: "product C",
        quantity: 10,
      },
      {
        name: "product A",
        quantity: 20,
      },
      {
        name: "product B",
        quantity: 120,
      },
    ],
  },
  {
    userId: 1,
    discount: 0.2,
    products: [
      {
        name: "product C",
        quantity: 10,
      },
      {
        name: "product B",
        quantity: 120,
      },
    ],
  },
  {
    userId: 3,
    discount: 0.1,
    products: [
      {
        name: "product C",
        quantity: 10,
      },
    ],
  },
];

export const mainSeed = async () => {
  await Promise.all(
    users.map((user) => {
      return fetch("http://localhost:4000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
    })
  );

  await Promise.all(
    products.map((product) => {
      return fetch("http://localhost:4000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
    })
  );

  await Promise.all(
    invoices.map((invoice) => {
      return fetch("http://localhost:4000/invoices", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(invoice),
      });
    })
  );
};
