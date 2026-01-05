import React, { useState } from "react";
import Head from "@/layout/head/Head";
import Content from "@/layout/content/Content";
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
import { Modal, ModalBody, ModalHeader } from "reactstrap";

const MegaQuiz = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);

  // ✅ Static table data
  const staticData = [
    {
      title: "General Knowledge",
      timeLimit: 30,
      points: 10,
      status: "active",
    },
    {
      title: "Gaming Quiz",
      timeLimit: 45,
      points: 20,
      status: "inactive",
    },
  ];

  // ✅ Admin created quizzes
  const [quizzes, setQuizzes] = useState([]);

  // Form state
  const [formData, setFormData] = useState({
    title: "",
    timeLimit: "",
    points: "",
    status: "active",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuizzes([...quizzes, formData]); // add to table
    setFormData({ title: "", timeLimit: "", points: "", status: "active" });
    toggleModal();
  };

  // ✅ Merge static + dynamic
  const allQuizzes = [...staticData, ...quizzes];

  return (
    <React.Fragment>
      <Head title="Mega Quiz" />
      <Content>

        {/* ===== HEADER ===== */}
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle page tag="h3">
                Mega Quiz
              </BlockTitle>
            </BlockHeadContent>
            <BlockHeadContent>
              <Button color="primary" onClick={toggleModal}>
                Create Quiz
              </Button>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>

        {/* ===== TABLE ===== */}
        <Block>
          <PreviewCard className="card-bordered">
            <table className="table table-tranx">
              <thead>
                <tr>
                  <th>Quiz Title</th>
                  <th>Time</th>
                  <th>Points</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {allQuizzes.map((quiz, index) => (
                  <tr key={index}>
                    <td>{quiz.title}</td>
                    <td>{quiz.timeLimit}s</td>
                    <td>{quiz.points}</td>
                    <td>
                      <span
                        className={`badge ${
                          quiz.status === "active"
                            ? "bg-success"
                            : "bg-danger"
                        }`}
                      >
                        {quiz.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </PreviewCard>
        </Block>

        {/* ===== MODAL ===== */}
        <Modal isOpen={modal} toggle={toggleModal} size="lg">
          <ModalHeader toggle={toggleModal}>
            Create Mega Quiz
          </ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <Row className="g-3">
                <Col md="6">
                  <label className="form-label">Quiz Title</label>
                  <input
                    type="text"
                    name="title"
                    className="form-control"
                    required
                    onChange={handleChange}
                  />
                </Col>

                <Col md="6">
                  <label className="form-label">Time Limit</label>
                  <input
                    type="number"
                    name="timeLimit"
                    className="form-control"
                    required
                    onChange={handleChange}
                  />
                </Col>

                <Col md="6">
                  <label className="form-label">Points</label>
                  <input
                    type="number"
                    name="points"
                    className="form-control"
                    required
                    onChange={handleChange}
                  />
                </Col>

                <Col md="6">
                  <label className="form-label">Status</label>
                  <select
                    name="status"
                    className="form-select"
                    onChange={handleChange}
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </Col>

                <Col md="12" className="text-end">
                  <Button color="secondary" onClick={toggleModal} className="me-2">
                    Cancel
                  </Button>
                  <Button color="primary" type="submit">
                    Save Quiz
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

export default MegaQuiz;
