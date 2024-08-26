import React from 'react';
import { useCart } from './../layout/AppParams/AppParams'; 
import data from './data.js'; 
export default function CartModal() {
  const { cartProductIds, addProductToCart, removeProductFromCart } = useCart();

  const findProductById = (id) => {
    return (
      data.topServices.find((service) => service.id === id) ||
      data.services.find((service) => service.id === id)
    );
  };

  const groupedProducts = cartProductIds.reduce((acc, id) => {
    const foundProduct = acc.find((item) => item.id === id);
    if (foundProduct) {
      foundProduct.count += 1;
    } else {
      acc.push({ id, count: 1 });
    }
    return acc;
  }, []);

  const totalPrice = groupedProducts.reduce((total, item) => {
    const product = findProductById(item.id);
    const productPrice = parseFloat(product.price.replace('R$', '').replace(',', '.'));
    return total + productPrice * item.count;
  }, 0);

  const handleRemoveProduct = (id) => {
    const productCount = cartProductIds.filter(productId => productId === id).length;
    if (productCount > 1) {
      removeProductFromCart(id);
    } else {
      removeProductFromCart(id, true); 
    }
  };

  return (
    <div
      className="modal fade"
      id="cartModal"
      tabIndex="-1"
      aria-labelledby="cartModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-fullscreen-down">
        <div className="modal-content bg-dark text-light">
          <div className="modal-header border-secondary">
            <h5 className="modal-title" id="cartModalLabel">Itens no Carrinho</h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <ul className="list-group mb-3">
              {groupedProducts.length > 0 ? (
                groupedProducts.map((item, index) => {
                  const product = findProductById(item.id);
                  const productPrice = parseFloat(product.price.replace('R$', '').replace(',', '.'));
                  const totalProductPrice = productPrice * item.count;

                  return product ? (
                    <li
                      key={index}
                      className="list-group-item d-flex justify-content-between align-items-center text-light border-light"
                    >
                      <div className="d-flex align-items-center">
                        <span className="badge bg-secondary me-1 ms-0">{item.count}</span>
                        <img
                          src={`/img/sliderHome/p${product.carouselName}`}
                          alt={product.name}
                          className="me-3"
                          style={{ width: '100px', height: '60px', objectFit: 'cover' }}
                        />
                        <div>
                          <h6 className="mb-0 text-light">{product.name}</h6>
                          <small>Preço unitário: {product.price}</small><br />
                          <small>Total: R$ {totalProductPrice.toFixed(2).replace('.', ',')}</small>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <button
                          className="btn btn-outline-light btn-sm me-2"
                          onClick={() => handleRemoveProduct(item.id)}
                        >
                          <i className="bi bi-dash"></i>
                        </button>
                        <button
                          className="btn btn-outline-light btn-sm"
                          onClick={() => addProductToCart(item.id)}
                        >
                          <i className="bi bi-plus"></i>
                        </button>
                      </div>
                    </li>
                  ) : null;
                })
              ) : (
                <li className="list-group-item bg-secondary text-light border-light">O carrinho está vazio.</li>
              )}
            </ul>
            {groupedProducts.length > 0 && (
              <div className="d-flex justify-content-end">
                <h4>Total: R$ {totalPrice.toFixed(2).replace('.', ',')}</h4>
              </div>
            )}
          </div>
          <div className="modal-footer border-secondary">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}