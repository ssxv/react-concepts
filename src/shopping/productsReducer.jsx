const initialProducts = [
  { id: 1, name: 'Glue stick', price: 25 },
  { id: 2, name: 'Pen', price: 10 },
  { id: 3, name: 'Pencil', price: 3 },
  { id: 4, name: 'Eraser', price: 2 },
  { id: 5, name: 'Notebook', price: 20 },
  { id: 6, name: 'Paint', price: 60 },
  { id: 7, name: 'Crayons', price: 45 },
];

export const productsReducer = (products = initialProducts, action) => {
  switch (action.type) {
    default:
      return products;
  }
};
