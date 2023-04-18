import React, { useState } from "react";
import { Modal, Row, Col, Form, Card, Button } from "react-bootstrap";

const ViewPopupModel = (props) => {
  /* Destructuring the props object. */
  const { selectedData } = props;
  // console.log("🚀 ~ file: EditAssets.js:9 ~ EditAssets ~ selectedData:", selectedData);

  return (
    <>
      <Modal {...props} size="md" centered keyboard="false" backdrop="static">
        <Modal.Body>
          <h4 className={"text-center p-4"}>
            <b>ID :</b>
            {selectedData.id}
          </h4>
          <Row className="">
            <Col>
              <Form>
                <p><b>NAME :</b> {selectedData.name}</p>
                <p><b>EMAIL :</b> {selectedData.email}</p>
                <p><b>GENDER :</b> {selectedData.gender}</p>
                <p><b>AGE :</b> {selectedData.age}</p>
                <Col className="p-4 d-flex justify-content-center">
                  <Button onClick={props.onHide} variant={"outline-warning"}>
                    CANCEL 
                  </Button>
                  {/* <Button className="btn  btn-delete  mx-2 ">
                      SAVE CHANGES
                    </Button> */}
                </Col>
              </Form>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ViewPopupModel;
