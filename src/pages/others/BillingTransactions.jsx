import React, { useState } from "react";
import Head from "@/layout/head/Head";
import Content from "@/layout/content/Content";
import {
  Block,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  BlockBetween,
  PreviewCard,
  Button,
  Row,
  Col,
} from "@/components/Component";
import { Modal, ModalBody, ModalHeader } from "reactstrap";

const BillingTransactions = () => {
  const [sm, updateSm] = useState(false);
  const [filterModal, setFilterModal] = useState(false);

  const toggleFilter = () => setFilterModal(!filterModal);

  // ✅ Static billing data
  const transactions = [
    {
      id: "#TXN1001",
      user: "John Doe",
      amount: 250,
      method: "UPI",
      status: "success",
      date: "2025-01-10",
    },
    {
      id: "#TXN1002",
      user: "Alex Smith",
      amount: 500,
      method: "Wallet",
      status: "pending",
      date: "2025-01-12",
    },
    {
      id: "#TXN1003",
      user: "Rahul Verma",
      amount: 1200,
      method: "Card",
      status: "failed",
      date: "2025-01-15",
    },
  ];

  return (
    <React.Fragment>
      <Head title="Billing Transactions" />
      <Content>

        {/* ===== HEADER ===== */}
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle page tag="h3">
                Billing & Transactions
              </BlockTitle>
            </BlockHeadContent>

            <BlockHeadContent>
              <div className="toggle-wrap nk-block-tools-toggle">
                <Button
                  className={`btn-icon btn-trigger toggle-expand me-n1 ${
                    sm ? "active" : ""
                  }`}
                  onClick={() => updateSm(!sm)}
                ></Button>
                <div
                  className="toggle-expand-content"
                  style={{ display: sm ? "block" : "none" }}
                >
                  <ul className="nk-block-tools g-3">
                    <li>
                      <Button color="primary" onClick={toggleFilter}>
                        Filter Transactions
                      </Button>
                    </li>
                  </ul>
                </div>
              </div>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>

        {/* ===== TABLE ===== */}
        <Block>
          <PreviewCard className="card-bordered">
            <table className="table table-tranx">
              <thead>
                <tr>
                  <th>Transaction ID</th>
                  <th>User</th>
                  <th>Amount</th>
                  <th>Payment Method</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((item, index) => (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.user}</td>
                    <td>₹{item.amount}</td>
                    <td>{item.method}</td>
                    <td>
                      <span
                        className={`badge ${
                          item.status === "success"
                            ? "bg-success"
                            : item.status === "pending"
                            ? "bg-warning"
                            : "bg-danger"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td>{item.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </PreviewCard>
        </Block>

        {/* ===== FILTER MODAL ===== */}
        <Modal isOpen={filterModal} toggle={toggleFilter}>
          <ModalHeader toggle={toggleFilter}>
            Filter Transactions
          </ModalHeader>
          <ModalBody>
            <Row className="g-3">
              <Col md="6">
                <label className="form-label">From Date</label>
                <input type="date" className="form-control" />
              </Col>

              <Col md="6">
                <label className="form-label">To Date</label>
                <input type="date" className="form-control" />
              </Col>

              <Col md="12">
                <label className="form-label">Status</label>
                <select className="form-select">
                  <option>All</option>
                  <option>Success</option>
                  <option>Pending</option>
                  <option>Failed</option>
                </select>
              </Col>

              <Col md="12" className="text-end">
                <Button color="secondary" onClick={toggleFilter} className="me-2">
                  Cancel
                </Button>
                <Button color="primary">Apply Filter</Button>
              </Col>
            </Row>
          </ModalBody>
        </Modal>

      </Content>
    </React.Fragment>
  );
};

export default BillingTransactions;
