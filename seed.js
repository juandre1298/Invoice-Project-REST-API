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
    userId: 2,
    discount: 3,
    dateOfEntry: "1-apr-2023",
    subtotal: 1550,
    total: 1085,
    products: [
      {
        name: "iPhone 7 Plus",
        quantity: 2,
      },
      {
        name: "iPhone SE",
        quantity: 5,
      },
      {
        name: "Apple Watch 7",
        quantity: 5,
      },
    ],
  },
  {
    userId: 5,
    discount: 7,
    dateOfEntry: "8-jun-2023",
    subtotal: 4050,
    total: 3766.5,
    products: [
      {
        name: "iPhone 13",
        quantity: 4,
      },
      {
        name: "iPad Pro",
        quantity: 3,
      },
      {
        name: "AirPods 2 Gen",
        quantity: 2,
      },
      {
        name: "iPad Mini",
        quantity: 1,
      },
    ],
  },
  {
    userId: 8,
    discount: 5,
    dateOfEntry: "20-may-2023",
    subtotal: 4400,
    total: 4180,
    products: [
      {
        name: "iPhone X+",
        quantity: 2,
      },
      {
        name: "iPhone SE",
        quantity: 3,
      },
      {
        name: "Apple Watch 7",
        quantity: 4,
      },
      {
        name: "iPad Pro",
        quantity: 1,
      },
    ],
  },
  {
    userId: 6,
    discount: 2,
    dateOfEntry: "10-apr-2023",
    subtotal: 2550,
    total: 2499,
    products: [
      {
        name: "iPhone 11",
        quantity: 2,
      },
      {
        name: "iPad Air",
        quantity: 1,
      },
    ],
  },
  {
    userId: 4,
    discount: 1,
    dateOfEntry: "15-may-2023",
    subtotal: 1150,
    total: 1138.5,
    products: [
      {
        name: "iPhone XR",
        quantity: 1,
      },
      {
        name: "AirPods Pro",
        quantity: 2,
      },
    ],
  },
  {
    userId: 7,
    discount: 6,
    dateOfEntry: "5-jun-2023",
    subtotal: 3200,
    total: 3008,
    products: [
      {
        name: "iPhone 12",
        quantity: 3,
      },
      {
        name: "iPad Mini",
        quantity: 2,
      },
    ],
  },
  {
    userId: 1,
    discount: 4,
    dateOfEntry: "25-apr-2023",
    subtotal: 1650,
    total: 1584,
    products: [
      {
        name: "iPhone X",
        quantity: 2,
      },
      {
        name: "Apple Watch 7",
        quantity: 1,
      },
    ],
  },
  {
    userId: 2,
    discount: 3,
    dateOfEntry: "1-apr-2023",
    subtotal: 1550,
    total: 1085,
    products: [
      {
        name: "iPhone 7 Plus",
        quantity: 2,
      },
      {
        name: "iPhone SE",
        quantity: 5,
      },
      {
        name: "Apple Watch 7",
        quantity: 5,
      },
    ],
  },
  {
    userId: 5,
    discount: 7,
    dateOfEntry: "8-jun-2023",
    subtotal: 4050,
    total: 3766.5,
    products: [
      {
        name: "iPhone 13",
        quantity: 4,
      },
      {
        name: "iPad Pro",
        quantity: 3,
      },
      {
        name: "AirPods 2 Gen",
        quantity: 2,
      },
      {
        name: "iPad Mini",
        quantity: 1,
      },
    ],
  },
  {
    userId: 8,
    discount: 5,
    dateOfEntry: "20-may-2023",
    subtotal: 4400,
    total: 4180,
    products: [
      {
        name: "iPhone X+",
        quantity: 2,
      },
      {
        name: "iPhone SE",
        quantity: 3,
      },
      {
        name: "Apple Watch 7",
        quantity: 4,
      },
      {
        name: "iPad Pro",
        quantity: 1,
      },
    ],
  },
  {
    userId: 6,
    discount: 2,
    dateOfEntry: "10-apr-2023",
    subtotal: 2550,
    total: 2499,
    products: [
      {
        name: "iPhone 11",
        quantity: 2,
      },
      {
        name: "iPad Air",
        quantity: 1,
      },
    ],
  },
  {
    userId: 4,
    discount: 1,
    dateOfEntry: "15-may-2023",
    subtotal: 1150,
    total: 1138.5,
    products: [
      {
        name: "iPhone XR",
        quantity: 1,
      },
      {
        name: "AirPods Pro",
        quantity: 2,
      },
    ],
  },
  {
    userId: 7,
    discount: 6,
    dateOfEntry: "5-jun-2023",
    subtotal: 3200,
    total: 3008,
    products: [
      {
        name: "iPhone 12",
        quantity: 3,
      },
      {
        name: "iPad Mini",
        quantity: 2,
      },
    ],
  },
  {
    userId: 1,
    discount: 4,
    dateOfEntry: "25-apr-2023",
    subtotal: 1650,
    total: 1584,
    products: [
      {
        name: "iPhone X",
        quantity: 2,
      },
      {
        name: "Apple Watch 7",
        quantity: 1,
      },
    ],
  },
  {
    userId: 10,
    discount: 8,
    dateOfEntry: "12-jun-2023",
    subtotal: 5600,
    total: 5152,
    products: [
      {
        name: "iPhone 13 mini",
        quantity: 2,
      },
      {
        name: "iPad Pro",
        quantity: 4,
      },
      {
        name: "AirPods 2 Gen",
        quantity: 3,
      },
    ],
  },
  {
    userId: 9,
    discount: 3,
    dateOfEntry: "30-may-2023",
    subtotal: 2150,
    total: 2084.5,
    products: [
      {
        name: "iPhone 7",
        quantity: 1,
      },
      {
        name: "iPad Air",
        quantity: 2,
      },
    ],
  },
  {
    userId: 3,
    discount: 5,
    dateOfEntry: "5-apr-2023",
    subtotal: 4050,
    total: 3847.5,
    products: [
      {
        name: "iPhone 13 Pro",
        quantity: 4,
      },
      {
        name: "iPad Pro",
        quantity: 1,
      },
    ],
  },
  {
    userId: 7,
    discount: 2,
    dateOfEntry: "12-apr-2023",
    subtotal: 3000,
    total: 2940,
    products: [
      {
        name: "iPhone X+",
        quantity: 2,
      },
      {
        name: "iPhone SE",
        quantity: 2,
      },
      {
        name: "Apple Watch 7",
        quantity: 1,
      },
    ],
  },
  {
    userId: 5,
    discount: 1,
    dateOfEntry: "28-apr-2023",
    subtotal: 650,
    total: 643.5,
    products: [
      {
        name: "iPhone 6",
        quantity: 1,
      },
      {
        name: "AirPods Pro",
        quantity: 1,
      },
    ],
  },
  {
    userId: 9,
    discount: 6,
    dateOfEntry: "15-may-2023",
    subtotal: 2250,
    total: 2115,
    products: [
      {
        name: "iPhone XR",
        quantity: 2,
      },
      {
        name: "AirPods 3 Gen",
        quantity: 1,
      },
    ],
  },
  {
    userId: 1,
    discount: 3,
    dateOfEntry: "4-apr-2023",
    subtotal: 650,
    total: 630.5,
    products: [
      {
        name: "iPhone 6+",
        quantity: 1,
      },
      {
        name: "AirPods 3 Gen",
        quantity: 1,
      },
    ],
  },
  {
    userId: 3,
    discount: 2,
    dateOfEntry: "21-may-2023",
    subtotal: 1000,
    total: 980,
    products: [
      {
        name: "iPhone 5S",
        quantity: 1,
      },
      {
        name: "Air Pods Max",
        quantity: 1,
      },
    ],
  },
  {
    userId: 6,
    discount: 7,
    dateOfEntry: "7-jun-2023",
    subtotal: 3550,
    total: 3301.5,
    products: [
      {
        name: "iPhone 11",
        quantity: 3,
      },
      {
        name: "iPad Mini",
        quantity: 1,
      },
      {
        name: "Air Tag",
        quantity: 2,
      },
    ],
  },
  {
    userId: 4,
    discount: 5,
    dateOfEntry: "26-apr-2023",
    subtotal: 2950,
    total: 2802.5,
    products: [
      {
        name: "iPhone X",
        quantity: 2,
      },
      {
        name: "Apple Watch 7",
        quantity: 1,
      },
      {
        name: "AirPods 2 Gen",
        quantity: 2,
      },
    ],
  },
  {
    userId: 10,
    discount: 1,
    dateOfEntry: "9-may-2023",
    subtotal: 950,
    total: 940.5,
    products: [
      {
        name: "iPhone 6",
        quantity: 1,
      },
      {
        name: "AirPods Pro",
        quantity: 1,
      },
    ],
  },
  {
    userId: 8,
    discount: 4,
    dateOfEntry: "2-jun-2023",
    subtotal: 1950,
    total: 1872,
    products: [
      {
        name: "iPhone 13",
        quantity: 2,
      },
      {
        name: "iPad Air",
        quantity: 1,
      },
    ],
  },
  {
    userId: 2,
    discount: 3,
    dateOfEntry: "18-apr-2023",
    subtotal: 1050,
    total: 1018.5,
    products: [
      {
        name: "iPhone 5S",
        quantity: 1,
      },
      {
        name: "Apple Watch 7",
        quantity: 1,
      },
      {
        name: "AirPods Pro",
        quantity: 1,
      },
    ],
  },
  {
    userId: 7,
    discount: 6,
    dateOfEntry: "29-may-2023",
    subtotal: 1800,
    total: 1692,
    products: [
      {
        name: "iPhone SE",
        quantity: 2,
      },
      {
        name: "Apple Watch 7",
        quantity: 1,
      },
      {
        name: "AirPods 3 Gen",
        quantity: 1,
      },
    ],
  },
  {
    userId: 10,
    discount: 8,
    dateOfEntry: "12-jun-2023",
    subtotal: 5600,
    total: 5152,
    products: [
      {
        name: "iPhone 13 mini",
        quantity: 2,
      },
      {
        name: "iPad Pro",
        quantity: 4,
      },
      {
        name: "AirPods 2 Gen",
        quantity: 3,
      },
    ],
  },
  {
    userId: 9,
    discount: 3,
    dateOfEntry: "30-may-2023",
    subtotal: 2150,
    total: 2084.5,
    products: [
      {
        name: "iPhone 7",
        quantity: 1,
      },
      {
        name: "iPad Air",
        quantity: 2,
      },
    ],
  },
  {
    userId: 3,
    discount: 5,
    dateOfEntry: "5-apr-2023",
    subtotal: 4050,
    total: 3847.5,
    products: [
      {
        name: "iPhone 13 Pro",
        quantity: 4,
      },
      {
        name: "iPad Pro",
        quantity: 1,
      },
    ],
  },
  {
    userId: 10,
    discount: 1,
    dateOfEntry: "9-may-2023",
    subtotal: 950,
    total: 940.5,
    products: [
      {
        name: "iPhone 6",
        quantity: 1,
      },
      {
        name: "AirPods Pro",
        quantity: 1,
      },
    ],
  },
  {
    userId: 8,
    discount: 4,
    dateOfEntry: "2-jun-2023",
    subtotal: 1950,
    total: 1872,
    products: [
      {
        name: "iPhone 13",
        quantity: 2,
      },
      {
        name: "iPad Air",
        quantity: 1,
      },
    ],
  },
  {
    userId: 2,
    discount: 3,
    dateOfEntry: "18-apr-2023",
    subtotal: 1050,
    total: 1018.5,
    products: [
      {
        name: "iPhone 5S",
        quantity: 1,
      },
      {
        name: "Apple Watch 7",
        quantity: 1,
      },
      {
        name: "AirPods Pro",
        quantity: 1,
      },
    ],
  },
  {
    userId: 7,
    discount: 6,
    dateOfEntry: "29-may-2023",
    subtotal: 1800,
    total: 1692,
    products: [
      {
        name: "iPhone SE",
        quantity: 2,
      },
      {
        name: "Apple Watch 7",
        quantity: 1,
      },
      {
        name: "AirPods 3 Gen",
        quantity: 1,
      },
    ],
  },
  {
    userId: 10,
    discount: 8,
    dateOfEntry: "12-jun-2023",
    subtotal: 5600,
    total: 5152,
    products: [
      {
        name: "iPhone 13 mini",
        quantity: 2,
      },
      {
        name: "iPad Pro",
        quantity: 4,
      },
      {
        name: "AirPods 2 Gen",
        quantity: 3,
      },
    ],
  },
  {
    userId: 9,
    discount: 3,
    dateOfEntry: "30-may-2023",
    subtotal: 2150,
    total: 2084.5,
    products: [
      {
        name: "iPhone 7",
        quantity: 1,
      },
      {
        name: "iPad Air",
        quantity: 2,
      },
    ],
  },
  {
    userId: 3,
    discount: 5,
    dateOfEntry: "5-apr-2023",
    subtotal: 4050,
    total: 3847.5,
    products: [
      {
        name: "iPhone 13 Pro",
        quantity: 4,
      },
      {
        name: "iPad Pro",
        quantity: 1,
      },
    ],
  },
  {
    userId: 10,
    discount: 1,
    dateOfEntry: "9-may-2023",
    subtotal: 950,
    total: 940.5,
    products: [
      {
        name: "iPhone 6",
        quantity: 1,
      },
      {
        name: "AirPods Pro",
        quantity: 1,
      },
    ],
  },
  {
    userId: 8,
    discount: 4,
    dateOfEntry: "2-jun-2023",
    subtotal: 1950,
    total: 1872,
    products: [
      {
        name: "iPhone 13",
        quantity: 2,
      },
      {
        name: "iPad Air",
        quantity: 1,
      },
    ],
  },
  {
    userId: 2,
    discount: 3,
    dateOfEntry: "18-apr-2023",
    subtotal: 1050,
    total: 1018.5,
    products: [
      {
        name: "iPhone 5S",
        quantity: 1,
      },
      {
        name: "Apple Watch 7",
        quantity: 1,
      },
      {
        name: "AirPods Pro",
        quantity: 1,
      },
    ],
  },
  {
    userId: 7,
    discount: 6,
    dateOfEntry: "29-may-2023",
    subtotal: 1800,
    total: 1692,
    products: [
      {
        name: "iPhone SE",
        quantity: 2,
      },
      {
        name: "Apple Watch 7",
        quantity: 1,
      },
      {
        name: "AirPods 3 Gen",
        quantity: 1,
      },
    ],
  },
  {
    userId: 10,
    discount: 8,
    dateOfEntry: "12-jun-2023",
    subtotal: 5600,
    total: 5152,
    products: [
      {
        name: "iPhone 13 mini",
        quantity: 2,
      },
      {
        name: "iPad Pro",
        quantity: 4,
      },
      {
        name: "AirPods 2 Gen",
        quantity: 3,
      },
    ],
  },
  {
    userId: 9,
    discount: 3,
    dateOfEntry: "30-may-2023",
    subtotal: 2150,
    total: 2084.5,
    products: [
      {
        name: "iPhone 7",
        quantity: 1,
      },
      {
        name: "iPad Air",
        quantity: 2,
      },
    ],
  },
  {
    userId: 3,
    discount: 5,
    dateOfEntry: "5-apr-2023",
    subtotal: 4050,
    total: 3847.5,
    products: [
      {
        name: "iPhone 13 Pro",
        quantity: 4,
      },
      {
        name: "iPad Pro",
        quantity: 1,
      },
    ],
  },
  {
    userId: 10,
    discount: 1,
    dateOfEntry: "9-may-2023",
    subtotal: 950,
    total: 940.5,
    products: [
      {
        name: "iPhone 6",
        quantity: 1,
      },
      {
        name: "AirPods Pro",
        quantity: 1,
      },
    ],
  },
  {
    userId: 8,
    discount: 4,
    dateOfEntry: "2-jun-2023",
    subtotal: 1950,
    total: 1872,
    products: [
      {
        name: "iPhone 13",
        quantity: 2,
      },
      {
        name: "iPad Air",
        quantity: 1,
      },
    ],
  },
  {
    userId: 2,
    discount: 3,
    dateOfEntry: "18-apr-2023",
    subtotal: 1050,
    total: 1018.5,
    products: [
      {
        name: "iPhone 5S",
        quantity: 1,
      },
      {
        name: "Apple Watch 7",
        quantity: 1,
      },
      {
        name: "AirPods Pro",
        quantity: 1,
      },
    ],
  },
  {
    userId: 7,
    discount: 6,
    dateOfEntry: "29-may-2023",
    subtotal: 1800,
    total: 1692,
    products: [
      {
        name: "iPhone SE",
        quantity: 2,
      },
      {
        name: "Apple Watch 7",
        quantity: 1,
      },
      {
        name: "AirPods 3 Gen",
        quantity: 1,
      },
    ],
  },
  {
    userId: 10,
    discount: 8,
    dateOfEntry: "12-jun-2023",
    subtotal: 5600,
    total: 5152,
    products: [
      {
        name: "iPhone 13 mini",
        quantity: 2,
      },
      {
        name: "iPad Pro",
        quantity: 4,
      },
      {
        name: "AirPods 2 Gen",
        quantity: 3,
      },
    ],
  },
  {
    userId: 9,
    discount: 3,
    dateOfEntry: "30-may-2023",
    subtotal: 2150,
    total: 2084.5,
    products: [
      {
        name: "iPhone 7",
        quantity: 1,
      },
      {
        name: "iPad Air",
        quantity: 2,
      },
    ],
  },
  {
    userId: 3,
    discount: 5,
    dateOfEntry: "5-apr-2023",
    subtotal: 4050,
    total: 3847.5,
    products: [
      {
        name: "iPhone 13 Pro",
        quantity: 4,
      },
      {
        name: "iPad Pro",
        quantity: 1,
      },
    ],
  },
  {
    userId: 10,
    discount: 1,
    dateOfEntry: "9-may-2023",
    subtotal: 950,
    total: 940.5,
    products: [
      {
        name: "iPhone 6",
        quantity: 1,
      },
      {
        name: "AirPods Pro",
        quantity: 1,
      },
    ],
  },
  {
    userId: 8,
    discount: 4,
    dateOfEntry: "2-jun-2023",
    subtotal: 1950,
    total: 1872,
    products: [
      {
        name: "iPhone 13",
        quantity: 2,
      },
      {
        name: "iPad Air",
        quantity: 1,
      },
    ],
  },
  {
    userId: 2,
    discount: 3,
    dateOfEntry: "18-apr-2023",
    subtotal: 1050,
    total: 1018.5,
    products: [
      {
        name: "iPhone 5S",
        quantity: 1,
      },
      {
        name: "Apple Watch 7",
        quantity: 1,
      },
      {
        name: "AirPods Pro",
        quantity: 1,
      },
    ],
  },
  {
    userId: 7,
    discount: 6,
    dateOfEntry: "29-may-2023",
    subtotal: 1800,
    total: 1692,
    products: [
      {
        name: "iPhone SE",
        quantity: 2,
      },
      {
        name: "Apple Watch 7",
        quantity: 1,
      },
      {
        name: "AirPods 3 Gen",
        quantity: 1,
      },
    ],
  },
  {
    userId: 10,
    discount: 8,
    dateOfEntry: "12-jun-2023",
    subtotal: 5600,
    total: 5152,
    products: [
      {
        name: "iPhone 13 mini",
        quantity: 2,
      },
      {
        name: "iPad Pro",
        quantity: 4,
      },
      {
        name: "AirPods 2 Gen",
        quantity: 3,
      },
    ],
  },
  {
    userId: 9,
    discount: 3,
    dateOfEntry: "30-may-2023",
    subtotal: 2150,
    total: 2084.5,
    products: [
      {
        name: "iPhone 7",
        quantity: 1,
      },
      {
        name: "iPad Air",
        quantity: 2,
      },
    ],
  },
  {
    userId: 3,
    discount: 5,
    dateOfEntry: "5-apr-2023",
    subtotal: 4050,
    total: 3847.5,
    products: [
      {
        name: "iPhone 13 Pro",
        quantity: 4,
      },
      {
        name: "iPad Pro",
        quantity: 1,
      },
    ],
  },
  {
    userId: 10,
    discount: 1,
    dateOfEntry: "9-may-2023",
    subtotal: 950,
    total: 940.5,
    products: [
      {
        name: "iPhone 6",
        quantity: 1,
      },
      {
        name: "AirPods Pro",
        quantity: 1,
      },
    ],
  },
  {
    userId: 8,
    discount: 4,
    dateOfEntry: "2-jun-2023",
    subtotal: 1950,
    total: 1872,
    products: [
      {
        name: "iPhone 13",
        quantity: 2,
      },
      {
        name: "iPad Air",
        quantity: 1,
      },
    ],
  },
  {
    userId: 2,
    discount: 3,
    dateOfEntry: "18-apr-2023",
    subtotal: 1050,
    total: 1018.5,
    products: [
      {
        name: "iPhone 5S",
        quantity: 1,
      },
      {
        name: "Apple Watch 7",
        quantity: 1,
      },
      {
        name: "AirPods Pro",
        quantity: 1,
      },
    ],
  },
  {
    userId: 7,
    discount: 6,
    dateOfEntry: "29-may-2023",
    subtotal: 1800,
    total: 1692,
    products: [
      {
        name: "iPhone SE",
        quantity: 2,
      },
      {
        name: "Apple Watch 7",
        quantity: 1,
      },
      {
        name: "AirPods 3 Gen",
        quantity: 1,
      },
    ],
  },
  {
    userId: 10,
    discount: 8,
    dateOfEntry: "12-jun-2023",
    subtotal: 5600,
    total: 5152,
    products: [
      {
        name: "iPhone 13 mini",
        quantity: 2,
      },
      {
        name: "iPad Pro",
        quantity: 4,
      },
      {
        name: "AirPods 2 Gen",
        quantity: 3,
      },
    ],
  },
  {
    userId: 9,
    discount: 3,
    dateOfEntry: "30-may-2023",
    subtotal: 2150,
    total: 2084.5,
    products: [
      {
        name: "iPhone 7",
        quantity: 1,
      },
      {
        name: "iPad Air",
        quantity: 2,
      },
    ],
  },
  {
    userId: 3,
    discount: 5,
    dateOfEntry: "5-apr-2023",
    subtotal: 4050,
    total: 3847.5,
    products: [
      {
        name: "iPhone 13 Pro",
        quantity: 4,
      },
      {
        name: "iPad Pro",
        quantity: 1,
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
