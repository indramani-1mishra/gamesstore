import React, { useState } from 'react'
import Head from '@/layout/head/Head'
import Content from '@/layout/content/Content'
import {
  Block,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  PreviewCard,
  Button,
  Row,
  Col
} from '@/components/Component'

const CreateVideo = () => {
  const [formData, setFormData] = useState({
    title: '',
    url: '',
    image: null
  })

  // Handle input change
  const handleChange = e => {
    const { name, value, files } = e.target
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    })
  }

  // Handle submit
  const handleSubmit = e => {
    e.preventDefault()

    // Backend/API ready data
    const payload = new FormData()
    payload.append('title', formData.title)
    payload.append('url', formData.url)
    payload.append('image', formData.image)

    console.log('Video Data:', {
      title: formData.title,
      url: formData.url,
      image: formData.image
    })

    alert('Video Created Successfully!')
  }

  return (
    <React.Fragment>
      <Head title='Video' />
      <Content>
        {/* ===== PAGE HEADER ===== */}
        <BlockHead size='sm'>
          <BlockHeadContent>
            <BlockTitle page tag='h3'>
              Create Video
            </BlockTitle>
          </BlockHeadContent>
        </BlockHead>

        {/* ===== FORM CARD ===== */}
        <Block>
          <PreviewCard className='card-bordered'>
            <form onSubmit={handleSubmit}>
              <Row className='g-4'>
                {/* Title */}
                <Col md='6'>
                  <label className='form-label'>Title</label>
                  <input
                    type='text'
                    name='title'
                    className='form-control'
                    placeholder='Enter game title'
                    required
                    onChange={handleChange}
                  />
                </Col>

                {/* Image */}
                <Col md='6'>
                  <label className='form-label'>Thumbnail</label>
                  <input
                    type='file'
                    name='image'
                    className='form-control'
                    accept='image/*'
                    required
                    onChange={handleChange}
                  />
                </Col>
                <Col md='6'>
                  <lable className='form-label'>Video</lable>
                  <input
                    type='file'
                    name='video'
                    className='form-control'
                    accept='video/*'
                    required
                    onChange={handleChange}
                  />
                </Col>
                <Col md='6'>
                  <label className='form-label'>Game URL</label>
                  <input
                    type='url'
                    name='url'
                    className='form-control'
                    placeholder='https://example.com/game'
                    
                    onChange={handleChange}
                  />
                </Col>
                <Col md='12'>
                   <label className="form-label">Description</label>
                   <textarea
                     type="text"
                     name="description"
                     className="form-control"
                     placeholder="Enter description"
                     required
                     onChange={handleChange}
                   />
                </Col>
               
                {/* Submit */}
                <Col md='12' className='text-end'>
                  <Button color='primary' type='submit'>
                    Submit
                  </Button>
                </Col>
              </Row>
            </form>
          </PreviewCard>
        </Block>
      </Content>
    </React.Fragment>
  )
}

export default CreateVideo
