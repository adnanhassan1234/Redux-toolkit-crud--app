import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../features/UserDetailsSlice";

const Update = () => {
  let { id } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [updateData, setUpdateData] = useState();
  const userData = useSelector((state) => state.app.users);
//   console.log("🚀 ~ file: Update.js:14 ~ Update ~ userData:", userData)

  useEffect(() => {
    if (id) {
      const singleUserData = userData.filter((ele) => ele.id === id);
      setUpdateData(singleUserData[0]);
    }
  }, []);

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    setUpdateData((prevalue) => {
      return {
        ...prevalue, // Spread Operator
        [name]: value,
      };
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(updateUser(updateData));
    navigate('/read'); // navigate to the 'new-route' pat
   
  };

  return (
    <>
      <div className="create_form my-5">
        <div className="container">
          <h3 className="text-center mb-3">Update data</h3>
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
                  value={updateData && updateData.name}
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
                  value={updateData && updateData.email}
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
                  value={updateData && updateData.age}
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
                    checked={updateData && updateData.gender === "male"}
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
                    checked={updateData && updateData.gender === "Female"}
                    onChange={handleChange}
                  />
                  <label className="form-check-label">Female</label>
                </div>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary w-50">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Update;
