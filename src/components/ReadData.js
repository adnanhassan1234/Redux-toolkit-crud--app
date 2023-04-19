import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, showUser } from "../features/UserDetailsSlice";
import ViewPopupModel from "./ViewPopupModel";
import { NavLink } from "react-router-dom";

const ReadData = () => {
  const dispatch = useDispatch();

  const [allCheck, setAllCheck] = useState("");
  const [show, setShow] = useState(false);
  const [selectedData, setSelectedData] = useState({});

  const apiAllData = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(showUser());
  }, []);

  const deleteData = (id) => {
    dispatch(deleteUser(id));
  };

  const selectedFunction = (item) => {
    console.log(item);
    if (show == true) {
      setShow(false);
      setSelectedData({});
    } else {
      setShow(true);
      setSelectedData(item);
    }
  };

  if (apiAllData.isLoading) {
    return (
      <div className="loading ">
        <h4>Loading...</h4>;
      </div>
    );
  }

  return (
    <>
      <div className="card_sec my-5">
        <div className="container">
          <h3>All User Data</h3>
          <div className="label d-flex justify-content-end">
            <input
              className="form-check-input mx-1"
              type="radio"
              name="gender"
              required
              checked={allCheck === ""}
              onChange={() => setAllCheck("")}
            />
            <label className="form-check-label">All</label>
            <input
              className="form-check-input mx-1"
              type="radio"
              name="gender"
              value="male"
              required
              checked={allCheck === "male"}
              onChange={(e) => setAllCheck(e.target.value)}
            />
            <label className="form-check-label">Male</label>
            <input
              className="form-check-input mx-1"
              type="radio"
              name="gender"
              required
              value="Female" // change "Female" to "female"
              checked={allCheck === "Female"}
              onChange={(e) => setAllCheck(e.target.value)}
            />
            <label className="form-check-label">Female</label>
          </div>
          <div className="row">
            {apiAllData.users
              .filter((user) =>
                user.name
                  .toLowerCase()
                  .includes(apiAllData.searchTerm.toLowerCase())
              )
              .filter((ele) => {
                if (allCheck === "male") {
                  return ele.gender === "male";
                } else if (allCheck === "Female") {
                  return ele.gender === "Female";
                } else {
                  return true;
                }
              })
              .map((content) => {
                return (
                  <>
                    <div className="col-md-6 my-2">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title"> {content.name}</h5>
                          <p className="card-text">{content.email}</p>
                          <p className="card-text">{content.gender}</p>
                          <NavLink to={`/update/${content.id}`}>
                            {" "}
                            <button
                              type="button"
                              className="btn btn-primary mx-1"
                            >
                              Edit
                            </button>
                          </NavLink>
                          <button
                            type="button"
                            className="btn btn-primary mx-1"
                            onClick={() => selectedFunction(content)}
                          >
                            View
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary mx-1"
                            onClick={() => {
                              deleteData(content.id);
                            }}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
      <ViewPopupModel
        show={show}
        selectedData={selectedData}
        onHide={() => setShow(false)}
      />
    </>
  );
};

export default ReadData;
