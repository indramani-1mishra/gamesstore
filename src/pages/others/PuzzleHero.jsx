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

const PuzzleHero = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);

  // ✅ Static puzzles
  const staticPuzzles = [
    {
      title: "Block Puzzle",
      level: "Easy",
      reward: 50,
      status: "active",
    },
    {
      title: "Maze Escape",
      level: "Hard",
      reward: 100,
      status: "inactive",
    },
  ];

  // ✅ Admin created puzzles
  const [puzzles, setPuzzles] = useState([]);

  // Form state
  const [formData, setFormData] = useState({
    title: "",
    level: "Easy",
    reward: "",
    status: "active",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPuzzles([...puzzles, formData]);
    setFormData({ title: "", level: "Easy", reward: "", status: "active" });
    toggleModal();
  };

  const allPuzzles = [...staticPuzzles, ...puzzles];

  return (
    <React.Fragment>
      <Head title="Puzzle Hero" />
      <Content>

        {/* ===== HEADER ===== */}
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle page tag="h3">
                Puzzle Hero
              </BlockTitle>
            </BlockHeadContent>
            <BlockHeadContent>
              <Button color="primary" onClick={toggleModal}>
                Create Puzzle
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
                  <th>Puzzle Name</th>
                  <th>Level</th>
                  <th>Reward</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {allPuzzles.map((item, index) => (
                  <tr key={index}>
                    <td>{item.title}</td>
                    <td>{item.level}</td>
                    <td>{item.reward} Coins</td>
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
          </PreviewCard>
        </Block>

        {/* ===== MODAL ===== */}
        <Modal isOpen={modal} toggle={toggleModal} size="lg">
          <ModalHeader toggle={toggleModal}>
            Create Puzzle
          </ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <Row className="g-3">
                <Col md="6">
                  <label className="form-label">Puzzle Title</label>
                  <input
                    type="text"
                    name="title"
                    className="form-control"
                    required
                    onChange={handleChange}
                  />
                </Col>

                <Col md="6">
                  <label className="form-label">Difficulty Level</label>
                  <select
                    name="level"
                    className="form-select"
                    onChange={handleChange}
                  >
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                  </select>
                </Col>

                <Col md="6">
                  <label className="form-label">Reward Coins</label>
                  <input
                    type="number"
                    name="reward"
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
                    Save Puzzle
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

export default PuzzleHero;
