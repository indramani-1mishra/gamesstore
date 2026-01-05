import React, { useState } from "react";
import {
  Block,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  PreviewCard,
  BlockBetween,
  Button,
  Row,
  Col,
} from "@/components/Component";
import Content from "@/layout/content/Content";
import Head from "@/layout/head/Head";
import { Modal, ModalBody, ModalHeader } from "reactstrap";

const TriviaClash = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => setModal(!modal);

  // 🔹 Trivia List State
  const [triviaList, setTriviaList] = useState([]);

  // 🔹 Form State
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    timeLimit: "",
    points: "",
    status: "active",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add trivia to list
    setTriviaList([...triviaList, formData]);

    // Reset form
    setFormData({
      title: "",
      description: "",
      timeLimit: "",
      points: "",
      status: "active",
    });

    toggleModal();
  };

  return (
    <React.Fragment>
      <Head title="Trivia Clash" />
      <Content>
        {/* ===== HEADER ===== */}
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle page tag="h3">
                Trivia Clash
              </BlockTitle>
            </BlockHeadContent>

            <BlockHeadContent>
              <Button color="primary" onClick={toggleModal}>
                Create Trivia
              </Button>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>

        {/* ===== INFO CARD ===== */}
        <Block>
          <PreviewCard className="card-bordered">
            <h4>Trivia Clash Game</h4>
            <p>Manage trivia games, questions and rewards</p>
          </PreviewCard>
        </Block>

        {/* ===== TRIVIA LIST ===== */}
        <Block>
          <PreviewCard className="card-bordered">
            <h5 className="mb-3">Trivia List</h5>

            {triviaList.length === 0 ? (
              <p className="text-muted">No trivia created yet.</p>
            ) : (
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Time</th>
                    <th>Points</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {triviaList.map((item, index) => (
                    <tr key={index}>
                      <td>{item.title}</td>
                      <td>{item.timeLimit}s</td>
                      <td>{item.points}</td>
                      <td>
                        <span
                          className={`badge ${
                            item.status === "active"
                              ? "bg-success"
                              : "bg-danger"
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </PreviewCard>
        </Block>

        {/* ===== MODAL ===== */}
        <Modal isOpen={modal} toggle={toggleModal} size="lg">
          <ModalHeader toggle={toggleModal}>
            Create Trivia Game
          </ModalHeader>

          <ModalBody>
            <form onSubmit={handleSubmit}>
              <Row className="g-3">
                <Col md="6">
                  <label className="form-label">Game Title</label>
                  <input
                    type="text"
                    name="title"
                    className="form-control"
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />
                </Col>

                <Col md="6">
                  <label className="form-label">Time Limit (seconds)</label>
                  <input
                    type="number"
                    name="timeLimit"
                    className="form-control"
                    value={formData.timeLimit}
                    onChange={handleChange}
                    required
                  />
                </Col>

                <Col md="6">
                  <label className="form-label">Points Per Question</label>
                  <input
                    type="number"
                    name="points"
                    className="form-control"
                    value={formData.points}
                    onChange={handleChange}
                    required
                  />
                </Col>

                <Col md="6">
                  <label className="form-label">Status</label>
                  <select
                    name="status"
                    className="form-select"
                    value={formData.status}
                    onChange={handleChange}
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </Col>

                <Col md="12">
                  <label className="form-label">Description</label>
                  <textarea
                    name="description"
                    className="form-control"
                    value={formData.description}
                    onChange={handleChange}
                  />
                </Col>

                <Col md="12" className="text-end">
                  <Button
                    color="secondary"
                    onClick={toggleModal}
                    className="me-2"
                  >
                    Cancel
                  </Button>
                  <Button color="primary" type="submit">
                    Save Trivia
                  </Button>
                </Col>
              </Row>
            </form>
          </ModalBody>
        </Modal>
      </Content>
    </React.Fragment>
  );
};

export default TriviaClash;
