import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from './cartActions';

const CART_LIMIT = 4;

const Shopping = () => {
  const products = useSelector((state) => state.products);
  const cartProducts = useSelector((state) => state.cart.products);
  const cost = useSelector((state) => state.cart.cost);
  const dispatch = useDispatch();
  const disableAddToCart = (p) => {
    let disable = false;
    if (cartProducts.length >= CART_LIMIT) {
      disable = true;
    }
    return disable;
  };
  const disableRemoveFromCart = (p) => {
    let disable = false;
    if (getProductCount(p) <= 0) {
      disable = true;
    }
    return disable;
  };
  const getProductCount = (product) => {
    let count = 0;
    cartProducts.forEach((p) => {
      if (p.id === product.id) {
        count++;
      }
    });
    return count;
  };
  return (
    <div>
      <div>
        <h3>Cart Status:</h3>
        <h5>* cart limits to {CART_LIMIT} items</h5>
        <h4>Items: {cartProducts.length}</h4>
        <h4>Cost (Rs): {cost}</h4>
      </div>

      <table>
        <thead>
          <tr>
            <td style={{ width: '200px' }}>Product</td>
            <td style={{ width: '200px' }}>Price (Rs)</td>
            <td style={{ width: '200px' }}>Add to cart</td>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => {
            return (
              <tr>
                <td style={{ width: '200px' }}>{p.name}</td>
                <td style={{ width: '200px' }}>{p.price}</td>
                <td style={{ width: '200px' }}>
                  <button
                    disabled={disableRemoveFromCart(p)}
                    onClick={() => dispatch(removeFromCart(p))}
                  >
                    -
                  </button>
                  {getProductCount(p)}
                  <button
                    disabled={disableAddToCart(p)}
                    onClick={() => dispatch(addToCart(p))}
                  >
                    +
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Shopping;

// const columns = [
//   {
//     width: 200,
//     Header: 'Product',
//     accessor: 'name',
//   },
//   {
//     width: 200,
//     Header: 'Price',
//     accessor: 'price',
//   },
//   {
//     width: 100,
//     Header: 'Action',
//     Cell: ({ original }) => (
//       <button onClick={() => dispatch(addToCart(original))}>+</button>
//     ),
//   },
// ];
{
  /* <ReactTable data={products} columns={columns} />*/
}
