import React, { useState } from "react";
import Head from "@/layout/head/Head";
import Content from "@/layout/content/Content";
import Swal from "sweetalert2";
import {
  Block,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  PreviewCard,
  Button,
  Row,
  Col,
} from "@/components/Component";
import axios from "axios";
import { API } from "../../components/api/api";

const CreateTrandingGame = () => {
  const [formData, setFormData] = useState({
    title: "",
    url: "",
    image: null,
  });
const [uploading,setUploading]=useState(false);
  // Handle input change
  const handleChange = (e) => {
    const { name, value, files } = e.target;
   

    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  // Handle submit

  const handleSubmit = async(e) => {
    e.preventDefault();
   
    // Backend/API ready data
    const payload = new FormData();
    payload.append("gametitle", formData.title);
    payload.append("gameurl", formData.url);
    payload.append("gameimage", formData.image);
    payload.append("category", "trending");

   await uploadgame(payload);
   

   Swal.fire("Success!", "Game created successfully", "success");
  
    setFormData({
      title: "",
      url: "",
      image: null,
    });
     
    

    
  };

  const uploadgame =async (payload)=>{
    try{
      setUploading(true);
      const response = await API.post('/games/create',payload);
      if(response?.data){
        setUploading(false);

      }
     }catch(err){
      console.error("Error uploading game:",err);
      Swal.fire("Error!", "Failed to upload game", "error");
      setUploading(false);
      
    }
  }
  return (
    <React.Fragment>
      <Head title="Create Trending Game" />
      <Content>

        {/* ===== PAGE HEADER ===== */}
        <BlockHead size="sm">
          <BlockHeadContent>
            <BlockTitle page tag="h3">
              Create Trending Game
            </BlockTitle>
          </BlockHeadContent>
        </BlockHead>

        {/* ===== FORM CARD ===== */}
        <Block>
          <PreviewCard className="card-bordered">
            <form onSubmit={handleSubmit}>
              <Row className="g-4">

                {/* Title */}
                <Col md="12">
                  <label className="form-label">Game Title</label>
                  <input
                    type="text"
                    name="title"
                    className="form-control"
                    placeholder="Enter game title"
                    value={formData.title}
                    required
                    onChange={handleChange}
                  />
                </Col>

                {/* Image */}
                <Col md="12">
                  <label className="form-label">Game Image</label>
                  <input
                    type="file"
                    name="image"
                    className="form-control"
                    
                    accept="image/*"
                    required
                    onChange={handleChange}
                  />
                </Col>

                {/* URL */}
                <Col md="12">
                  <label className="form-label">Game URL</label>
                  <input
                    type="url"
                    name="url"
                    className="form-control"
                    placeholder="https://example.com/game"
                    value={formData.url}
                    required
                    onChange={handleChange}
                  />
                </Col>

                {/* Submit */}
                <Col md="12" className="text-end">
                  <button
  disabled={uploading}
  className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded"
>
  {uploading && (
    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
  )}
  {uploading ? "Submitting..." : "Submit"}
</button>

                </Col>

              </Row>
            </form>
          </PreviewCard>
        </Block>

      </Content>
    </React.Fragment>
  );
};

export default CreateTrandingGame;
