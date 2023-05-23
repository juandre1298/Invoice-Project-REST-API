import { createInvoice } from "./controllers/invoices.controller.js";
import { createProduct } from "./controllers/products.controller.js";
import { createUser } from "./controllers/users.controller.js";

export const users = [
  {
    name: "Juan Andres",
    phoneNumber: "1234676543",
    email: "juan@aimedgeapps.com",
    password: "123456",
    dateOfEntry: "1-Apr-23",
    status: "admin",
  },
  {
    name: "Keiddy",
    phoneNumber: "1234676543",
    email: "someEmailOfKeiddy@aimedgeapps.com",
    password: "123456",
    dateOfEntry: "1-Apr-23",
    status: "admin",
  },
  {
    name: "Ivan",
    phoneNumber: "1234676543",
    email: "someEmailOfIvan@aimedgeapps.com",
    password: "123456",
    dateOfEntry: "1-Apr-23",
    status: "admin",
  },
  {
    name: "Sharon",
    pointOfContact: "Ari Barkan",
    phoneNumber: "758305749",
    email: "SomeEmailOfSharon@aimedgeapps.com",
    password: "123456",
    dateOfEntry: "1-Apr-23",
    status: "admin",
  },
  {
    name: "Lifelinea LLC",
    pointOfContact: "Ari Barkan",
    phoneNumber: "758305749",
    email: "ari@lifelinea.com",
    password: "Lifelinea75Ari",
    dateOfEntry: "1-Apr-23",
  },
  {
    name: "Lifelinea LLC",
    pointOfContact: "Ari Barkan",
    phoneNumber: "758305749",
    email: "ari@lifelinea.com",
    password: "Lifelinea75Ari",
    dateOfEntry: "1-Apr-23",
  },
  {
    name: "Lifelinea LLC",
    pointOfContact: "Ari Barkan",
    phoneNumber: "758305749",
    email: "ari@lifelinea.com",
    password: "Lifelinea75Ari",
    dateOfEntry: "1-Apr-23",
  },
  {
    name: "Focus Forward LLC",
    pointOfContact: "Dave Pataki",
    phoneNumber: "666769940",
    email: "dave@focusforwrad.com",
    password: "Focus66Dave",
    dateOfEntry: "9-Jan-23",
  },
  {
    name: "Flow INC",
    pointOfContact: "Chadwick Smith",
    phoneNumber: "235035368",
    email: "chad@flow.com",
    password: "Flow23Chad",
    dateOfEntry: "1-Feb-10",
  },
  {
    name: "Marbi Inc",
    pointOfContact: "Kurt Silvers",
    phoneNumber: "495338595",
    email: "kurt@marbi.com",
    password: "Marbi49Kurt",
    dateOfEntry: "2-Sep-21",
  },
  {
    name: "Ex-IT Technologies",
    pointOfContact: "NA",
    phoneNumber: "3005849394",
    email: "info@exittech.com",
    password: "Ex-IT30NA",
    dateOfEntry: "5-Feb-23",
  },
  {
    name: "Agent Shield LLC",
    pointOfContact: "Lu Doan",
    phoneNumber: "234567689",
    email: "lu@agentshield.com",
    password: "Agent12Lu",
    dateOfEntry: "6-Mar-23",
  },
  {
    name: "Evergreen Inc",
    pointOfContact: "Tony Pizzi",
    phoneNumber: "12005053",
    email: "tony@evergreen.com",
    password: "Evergreen23Tony",
    dateOfEntry: "12-Apr-23",
  },
  {
    name: "FBL",
    pointOfContact: "Erick Boughman",
    phoneNumber: "234234234",
    email: "erick@fbl.com",
    password: "FBL23Erick",
    dateOfEntry: "18-Dec-22",
  },
  {
    name: "Virtues Matters",
    pointOfContact: "Dave Feldman",
    phoneNumber: "234234234",
    email: "dave@virtues.com",
    password: "Virtues23Dave",
    dateOfEntry: "9-Feb-18",
  },
];

export const products = [
  {
    id: 234,
    name: "iPhone 5S",
    price: 500,
  },
  {
    id: 344,
    name: "iPhone 6",
    price: 550,
  },
  {
    id: 68,
    name: "iPhone 6+",
    price: 600,
  },
  {
    id: 64,
    name: "iPhone 7",
    price: 650,
  },
  {
    id: 45,
    name: "iPhone 7 Plus",
    price: 700,
  },
  {
    id: 234,
    name: "iPhone X",
    price: 750,
  },
  {
    id: 567,
    name: "iPhone XR",
    price: 800,
  },
  {
    id: 231,
    name: "iPhone X+",
    price: 850,
  },
  {
    id: 345,
    name: "iPhone 11",
    price: 900,
  },
  {
    id: 768,
    name: "iPhone SE",
    price: 950,
  },
  {
    id: 789,
    name: "iPhone 12",
    price: 1000,
  },
  {
    id: 876,
    name: "iPhone 13",
    price: 1050,
  },
  {
    id: 98786,
    name: "iPhone 13 mini",
    price: 1100,
  },
  {
    id: 234,
    name: "iPhone 13 Pro",
    price: 1150,
  },
  {
    id: 45,
    name: "iPhone 12 Pro Max",
    price: 1200,
  },
  {
    id: 67,
    name: "AirPods 2 Gen",
    price: 1250,
  },
  {
    id: 123,
    name: "Apple Watch 7",
    price: 1300,
  },
  {
    id: 76687,
    name: "iPad Pro",
    price: 1350,
  },
  {
    id: 56767,
    name: "Air Tag",
    price: 1400,
  },
  {
    id: 6786,
    name: "Air Pods Max",
    price: 1450,
  },
  {
    id: 5675,
    name: "AirPods Pro",
    price: 1500,
  },
  {
    id: 56567,
    name: "AirPods 3 Gen",
    price: 1550,
  },
  {
    id: 94949,
    name: "iPad Air",
    price: 1600,
  },
  {
    id: 94842,
    name: "iPad Mini",
    price: 1650,
  },
];

export const invoices = [
  {
    userId: 5,
    discount: 0.3,
    dateOfEntry: "1-apr-2023",
    subtotal: 1550,
    total: 1085,
    products: [
      {
        name: "iPhone 5S",
        quantity: 2,
      },

      {
        name: "iPhone 6",
        quantity: 5,
      },
    ],
  },
  {
    userId: 6,
    discount: 0.2,
    dateOfEntry: "1-jan-2023",
    subtotal: 1550,
    total: 1085,
    products: [
      {
        name: "iPhone 5S",
        quantity: 1,
      },

      {
        name: "iPhone 6",
        quantity: 3,
      },
    ],
  },
];

export const mainSeed = async () => {
  // create users
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
  // create products

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
