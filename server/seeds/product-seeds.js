const { Product } = require('../models');

const productData = [
  {
    product_name: 'NVIDIA GeForce RTX 3080',
    price: 699.99,
    stock: 10,
    category_id: 1,
    sold: 20,
  },
  {
    product_name: 'AMD Ryzen 9 5900X',
    price: 549.99,
    stock: 5,
    category_id: 2,
    sold: 15,
  },
  {
    product_name: 'Logitech G502 Hero Gaming Mouse',
    price: 79.99,
    stock: 30,
    category_id: 3,
    sold: 50,
  },
  {
    product_name: 'Corsair Vengeance RGB Pro 16GB',
    price: 99.99,
    stock: 20,
    category_id: 4,
    sold: 25,
  },

  {
    product_name: 'NVIDIA GeForce RTX 3090',
    price: 1499.99,
    stock: 5,
    category_id: 1,
    sold: 10,
  },
  {
    product_name: 'AMD Ryzen 7 5800X',
    price: 449.99,
    stock: 10,
    category_id: 2,
    sold: 20,
  },
  {
    product_name: 'Razer DeathAdder Elite Gaming Mouse',
    price: 69.99,
    stock: 25,
    category_id: 3,
    sold: 40,
  },
  {
    product_name: 'G.SKILL Ripjaws V Series 16GB',
    price: 79.99,
    stock: 15,
    category_id: 4,
    sold: 30,
  },

  {
    product_name: 'NVIDIA GeForce RTX 3070',
    price: 499.99,
    stock: 10,
    category_id: 1,
    sold: 30,
  },
  {
    product_name: 'AMD Ryzen 5 5600X',
    price: 299.99,
    stock: 10,
    category_id: 2,
    sold: 25,
  },
  {
    product_name: 'SteelSeries Rival 3 Gaming Mouse',
    price: 29.99,
    stock: 40,
    category_id: 3,
    sold: 60,
  },
  {
    product_name: 'Crucial Ballistix 16GB',
    price: 69.99,
    stock: 20,
    category_id: 4,
    sold: 35,
  },
    {
      product_name: 'NVIDIA GeForce RTX 3060 Ti',
      price: 399.99,
      stock: 10,
      category_id: 1,
      sold: 40,
    },
    {
      product_name: 'AMD Ryzen 3 3300X',
      price: 149.99,
      stock: 10,
      category_id: 2,
      sold: 30,
    },
    {
      product_name: 'HyperX Pulsefire Core Gaming Mouse',
      price: 29.99,
      stock: 50,
      category_id: 3,
      sold: 70,
    },
    {
      product_name: 'Patriot Viper Steel 16GB',
      price: 59.99,
      stock: 25,
      category_id: 4,
      sold: 40,
    },
    //add some intel cpus 
    {
      product_name: 'Intel Core i9-10900K',
      price: 499.99,
      stock: 10,
      category_id: 2,
      sold: 25,
    },
    {
      product_name: 'Intel Core i7-10700K',
      price: 399.99,
      stock: 10,
      category_id: 2,
      sold: 20,
    },
    {
      product_name: 'Intel Core i5-10600K',
      price: 299.99,
      stock: 10,
      category_id: 2,
      sold: 15,
    },
    {
      product_name: 'Intel Core i3-10100',
      price: 149.99,
      stock: 10,
      category_id: 2,
      sold: 10,
    },
    
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
