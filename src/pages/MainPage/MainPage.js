import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../features/CartSlice";
import { fetchUserData } from "../../features/ApiSlice";
import { useNavigate } from 'react-router-dom';

const MainPage = () => {

    const navigate = useNavigate();
  const dispatch = useDispatch();
  const AllProducts = useSelector((state) => state.product);
  const userData = useSelector((state) => state.login);
  //    console.log("🚀 ~ file: MainPage.js:10 ~ MainPage ~ AllProducts:", AllProducts)

  useEffect(() => {
    dispatch(fetchUserData());
  }, []);

  const addToCart = (content) => {
    dispatch(addCart(content));
  };

  if (AllProducts.isLoading) {
    return <h4>Loading...</h4>;
  }

  // Check if user is logged in
  if (!userData.accessToken) {
    navigate("/"); // Redirect to login page
    return null;
  }

  return (
    <>
      <section className="main_home my-5">
        <div className="container">
          <div className="title text-center">
            <h4>Welcome to the redux tolkit store</h4> <br /> <h5>Products</h5>
          </div>
          <div className="row">
            {AllProducts.data?.map((content, ind) => {
              return (
                <>
                  <div className="col-lg-3 col-md-6">
                    <div className="full mt-5">
                      <div class="card text-center p-3" key={ind}>
                        <img
                          src={content.image}
                          class="card-img-top"
                          alt="..."
                          width={20}
                          height={150}
                        />
                        <div class="card-body">
                          <h5 class="card-title">{content.category}</h5>
                          <p class="card-text">
                            {content.description.slice(0, 50)}...
                          </p>
                          <p class="card-text">
                            <h5>Rs: {content.price}</h5>
                          </p>
                          <div className="add_to_cart">
                            <button
                              class="btn btn-primary"
                              onClick={() => addToCart(content)}
                            >
                              Add to cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default MainPage;
