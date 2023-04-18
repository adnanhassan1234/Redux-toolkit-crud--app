import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../features/UserDetailsSlice";
import { useNavigate } from 'react-router-dom';


const Create = () => {

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
    dispatch(createUser(formData));
    navigate('/read'); // navigate to the 'new-route' pat
    console.log(" submitForm ~ formData:", formData);
  };

  return (
    <>
      <div className="create_form my-5">
        <div className="container">
          <h3 className="text-center mb-3">Please fill this form</h3>
          <div className="full  p-4">
            <form onSubmit={submitForm}>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Age
                </label>
                <input
                  name="age"
                  type="text"
                  required
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    value="male"
                    required
                    onChange={handleChange}
                  />
                  <label className="form-check-label">Male</label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    required
                    value="Female" // change "Female" to "female"
                    onChange={handleChange}
                  />
                  <label className="form-check-label">Female</label>
                </div>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary w-50">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
