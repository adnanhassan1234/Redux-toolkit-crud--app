import React, { useEffect , useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, showUser } from "../features/UserDetailsSlice";
import ViewPopupModel from "./ViewPopupModel";

const ReadData = () => {
  const dispatch = useDispatch();

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
    return <div className="loading ">
    <h4>Loading...</h4>;
    </div>
  }

  return (
    <>
      <div className="card_sec my-5">
        <div className="container">
          <h3>All User Data</h3>
          <div className="row">
            {apiAllData.users?.map((content) => {
              return (
                <>
                  <div className="col-md-6 my-2">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title"> {content.name}</h5>
                        <p className="card-text">
                        {content.email}
                        </p>  
                        <p className="card-text">
                        {content.gender}
                        </p>
                        <button type="button" className="btn btn-primary mx-1">
                       Edit
                        </button>
                        <button type="button" className="btn btn-primary mx-1"  onClick={() => selectedFunction(content)}>
                        View
                        </button>
                        <button type="button" className="btn btn-primary mx-1" onClick={() => {
                            deleteData(content.id)
                        }}>
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
      <ViewPopupModel show={show} selectedData={selectedData} onHide={() => setShow(false)} />
    </>
  );
};

export default ReadData;
