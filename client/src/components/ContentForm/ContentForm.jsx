import React, { useState } from 'react';
import './ContentForm.css';

const ContentForm = () => {
  const [formData, setFormData] = useState({
    menu: '',
    link: '',
    heading: '',
    subHeading: '',
    shortDescription: '',
    longDescription: '',
    pageLocation: '',
    images: [],
    imageDescriptions: [],
  });

  const handleInputChange = (sectionIndex, key, value) => {
    const updatedFormData = { ...formData };
    if (key === 'image') {
      updatedFormData.images[sectionIndex] = value[0];
    } else if (key === 'imageDescription') {
      updatedFormData.imageDescriptions[sectionIndex] = value;
    } else {
      updatedFormData[key] = value;
    }
    setFormData(updatedFormData);
  };

  const handlePlusClick = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      images: [...prevFormData.images, null],
      imageDescriptions: [...prevFormData.imageDescriptions, ''],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      const imageArray = [];
      const imageDescriptionArray = [];

      formData.images.forEach((image, index) => {
        formDataToSend.append(`image[${index}]`, image);
        imageArray.push(image.path);
      });

      formData.imageDescriptions.forEach((description) => {
        formDataToSend.append('imageDescription[]', description);
        imageDescriptionArray.push(description);
      });

      formDataToSend.append('menu', formData.menu);
      formDataToSend.append('link', formData.link);
      formDataToSend.append('heading', formData.heading);
      formDataToSend.append('subHeading', formData.subHeading);
      formDataToSend.append('shortDescription', formData.shortDescription);
      formDataToSend.append('longDescription', formData.longDescription);
      formDataToSend.append('pageLocation', formData.pageLocation);

      await fetch('http://localhost:7000/api/v1/members', {
        method: 'POST',
        body: formDataToSend,
      });

      console.log('Form submitted successfully!');
      console.log('Image Paths:', imageArray);
      console.log('Image Descriptions:', imageDescriptionArray);

    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className='ContentForm'>
      <h1 className='CF_title'>Content Form</h1>
      <form className='CF_form' onSubmit={handleSubmit}>
        <div className="topSection">
          <div className='CF_input_element'>
            <label htmlFor="ContentName">Menu:</label>
            <input type="text" id="ContentName" name="ContentName" />
          </div>
          <div className='CF_input_element'>
            <label htmlFor="ContentLink">Link:</label>
            <input type="text" id="ContentLink" name="ContentLink" required />
          </div>
        </div>
        <div className="ContentSection">
      <div  className='CF_input_element'>
      <label htmlFor="Heading">Heading:</label>
      <input type="text" id="Heading" name="Heading" required/>
      </div>
      <div  className='CF_input_element'>
     <label htmlFor="SubHeading">SubHeading:</label>
      <input type="text" id="SubHeading" name="SubHeading" required/>
     </div>
      <div className='CF_input_element'>
      <label htmlFor="shortDescription">Short Description:</label>
      <textarea id="shortDescription" name="shortDescription" required/>
      </div>
      <div  className='CF_input_element'>
      <label htmlFor="LongDescription">Long Description:</label>
      <input type='text' id="LongDescription" name="LongDescription" required/>
      </div>
      <div className='CF_input_element'>
       <label htmlFor="PageLocation">Page Location:</label>
       <input type='text' id="PageLocation" name="PageLocation" required/>
      </div>
        </div>
        {formData.images.map((imageSection, index) => (
          <div className='imageSection' key={index}>
            <label htmlFor={`Image${index}`}>Image:</label>
            <input
              type="file"
              id={`Image${index}`}
              name={`Image${index}`}
              onChange={(e) =>
                handleInputChange(index, 'image', e.target.files)
              }
            />
            <label htmlFor={`ImageDescription${index}`}>Image Description:</label>
            <textarea
              id={`ImageDescription${index}`}
              name={`ImageDescription${index}`}
              onChange={(e) =>
                handleInputChange(index, 'imageDescription', e.target.value)
              }
            />
            
          </div>
        ))}
<i className="fa-solid fa-plus" onClick={handlePlusClick}></i>
        <button type='submit' className='CF_submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContentForm;
