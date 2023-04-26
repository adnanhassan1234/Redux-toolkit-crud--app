import React, { useState } from "react";
import "./login.css";
import "./responsive.css";
import login from "../../assets/images/login.png";
import { useDispatch } from "react-redux";
import { loginUser } from "../../features/LoginSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {

    
  const navigate = useNavigate();

    const dispatch = useDispatch();
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    setFormData((prevalue) => {
      return {
        ...prevalue, // Spread Operator
        [name]: value,
      };
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
    navigate('/main');
    // console.log(" submitForm ~ formData:", formData);
  };

  return (
    <>
      <section class="login">
        <div class="container">
          <form onSubmit={submitForm}>
            <div class="row box">
              <div class="col-lg-6 col-md-12 p-0">
                <div class="login_content">
                  <img src={login} alt="" />
                  <div class="account_detail my-3">
                    <h4>Don’t have any account?</h4>
                    <a href="sign-up.html">
                      {" "}
                      <button type="button" class="btn btn-warning">
                        Register Now
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-12 ">
                <div class="login_form p-3">
                  <h5 class="my-2">Login</h5>
                  <div class="account_button my-3">
                    <button
                      type="button"
                      class="btn btn-first btn-warning mx-2"
                    >
                      As Agency
                    </button>
                    <button
                      type="button"
                      class="btn btn-warning btn-second mx-2"
                    >
                      As Agent
                    </button>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="inpu_field">
                        <label for="">Username or email</label>
                        <input type="email" value={formData.email} class="form-control" name="email"  onChange={handleChange} />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="inpu_field mt-3">
                        <label for="">Password</label>
                        <input type="password" class="form-control" value={formData.password} name="password"  onChange={handleChange} />
                      </div>
                      <button type="submit" class="btn submit btn-warning mt-4">
                        Login
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
