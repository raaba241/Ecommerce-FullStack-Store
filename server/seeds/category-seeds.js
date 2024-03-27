const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'GPU',
  },
  {
    category_name: 'CPU',
  },
  {
    category_name: 'Peripherals',
  },
  {
    category_name: 'RAM',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
