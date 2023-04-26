import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCart } from "../../features/CartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.login);
  const products = useSelector((state) => state.cart);

  const [quantities, setQuantities] = useState(
    products.reduce((acc, curr) => ({ ...acc, [curr.id]: curr.quantity }), {})
  );

  const handleRemove = (id) => {
    dispatch(removeCart(id));
    setQuantities((prevQuantities) => ({ ...prevQuantities, [id]: 0 }));
  };

  const handleQuantityChange = (id, quantity) => {
    setQuantities((prevQuantities) => ({ ...prevQuantities, [id]: quantity }));
  };

   // Calculate total price
   const totalPrice = products.reduce(
    (total, product) => total + product.price * (quantities[product.id] || 1),
    0
  )

  // Check if user is logged in
  if (!userData.accessToken) {
    navigate("/"); // Redirect to login page
    return null;
  }

  return (
    <>
      <div className="cart my-5">
        <div className="container">
          <div className="full responsive text-center">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">Title</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Total</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              {products?.map((content, ind) => {
                const { id, image, title, price } = content;
                const quantity = quantities[id] || 1;
                const total = price * quantity;
                return (
                  <tbody key={id}>
                    <tr>
                      <td>
                        <img src={image} alt="" />
                      </td>
                      <td>
                        <h6 className="mt-3">{title}</h6>
                      </td>
                      <td>
                        <h6 className="mt-3">{price}</h6>
                      </td>
                      <td>
                        <div className="d-flex justify-content-center align-items-center">
                          <button
                            className="btn btn-outline-secondary"
                            onClick={() =>
                              handleQuantityChange(id, Math.max(0, quantity - 1))
                            }
                          >
                            -
                          </button>
                          <input
                            type="number"
                            className="form-control mx-2"
                            value={quantity}
                            onChange={(e) =>
                              handleQuantityChange(id, parseInt(e.target.value))
                            }
                          />
                          <button
                            className="btn btn-outline-secondary"
                            onClick={() =>
                              handleQuantityChange(id, quantity + 1)
                            }
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td>
                        <h6 className="mt-3">{total}</h6>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleRemove(id)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>

            <h4 className="mb-2">Total Price: {totalPrice}</h4> <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
