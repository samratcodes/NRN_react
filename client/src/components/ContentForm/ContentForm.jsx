// ContentForm.js
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
    subMenus: [
      {
        name: '',
        link: '',
        content: [
          {
            heading: '',
            subHeading: '',
            shortDescription: '',
            longDescription: '',
            pageLocation: '',
            images: [],
            imageDescriptions: [],
          },
        ],
      },
    ],
  });
  const handleSubMenuInputChange = (submenuIndex, key, value,contentIndex) => {
    setFormData((prevFormData) => {
      const updatedFormData = { ...prevFormData };
      if (contentIndex !== undefined) {
        updatedFormData.subMenus[submenuIndex].content[contentIndex][key] = value;
      } else {

        updatedFormData.subMenus[submenuIndex][key] = value;
      }
      return updatedFormData;
    });
  };




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

  const handleSubMenuPlusClick = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      subMenus: [
        ...prevFormData.subMenus,
        {
          name: '',
          link: '',
          content: [
            {
              heading: '',
              subHeading: '',
              shortDescription: '',
              longDescription: '',
              pageLocation: '',
              images: [],
              imageDescriptions: [],
            },
          ],
        },
      ],
    }));
  };


  const handleContentPlusClick = (submenuIndex) => {
    setFormData((prevFormData) => {
      const newSubMenus = [...prevFormData.subMenus];
      newSubMenus[submenuIndex].content.push({
        heading: '',
        subHeading: '',
        shortDescription: '',
        longDescription: '',
        pageLocation: '',
        images: [],
        imageDescriptions: [],
      });
      return {
        ...prevFormData,
        subMenus: newSubMenus,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = {
        name: formData.menu,
        link: formData.link,
        content: [
          {
            heading: formData.heading,
            subHeading: formData.subHeading,
            shortDescription: formData.shortDescription,
            longDescription: formData.longDescription,
            pageLocation: formData.pageLocation,
            images: formData.images.map((image) => image.path),
            imageDescriptions: formData.imageDescriptions,
          },
        ],
        subMenus: formData.subMenus.map((submenu) => ({
          name: submenu.name,
          link: submenu.link,
          content: submenu.content.map((content) => ({
            heading: content.heading,
            subHeading: content.subHeading,
            shortDescription: content.shortDescription,
            longDescription: content.longDescription,
            pageLocation: content.pageLocation,
            images: content.images.map((image) => image.path),
            imageDescriptions: content.imageDescriptions,
          })),
        })),
      };

      await fetch('http://localhost:7000/api/v1/menu', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataToSend),
      });

      console.log('Form submitted successfully!');
      console.log('Data to send:', formDataToSend);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className='ContentForm'>
      <h1 className='CF_title'>Content Form</h1>
      <form className='CF_form' onSubmit={handleSubmit}>
        <div className='topSection'>
          <div className='CF_input_element'>
            <label htmlFor='ContentName'>Menu:</label>
            <input
              type='text'
              id='ContentName'
              name='name'
              value={formData.menu}
              onChange={(e) => handleInputChange(0, 'menu', e.target.value)}
            />
          </div>
          <div className='CF_input_element'>
            <label htmlFor='ContentLink'>Link:</label>
            <input
              type='text'
              id='ContentLink'
              name='link'
              value={formData.link}
              onChange={(e) => handleInputChange(0, 'link', e.target.value)}
              required
            />
          </div>
        </div>
        <div className='ContentSection'>
          <div className='CF_input_element'>
            <label htmlFor='Heading'>Heading:</label>
            <input
              type='text'
              id='Heading'
              name='main_heading1'
              value={formData.heading}
              onChange={(e) => handleInputChange(0, 'heading', e.target.value)}
              required
            />
          </div>
          <div className='CF_input_element'>
            <label htmlFor='SubHeading'>SubHeading:</label>
            <input
              type='text'
              id='SubHeading'
              name='main_subHeading1'
              value={formData.subHeading}
              onChange={(e) => handleInputChange(0, 'subHeading', e.target.value)}
              required
            />
          </div>
          <div className='CF_input_element'>
            <label htmlFor='shortDescription'>Short Description:</label>
            <input
              type='text'
              id='shortDescription'
              name='shortDescription'
              value={formData.shortDescription}
              onChange={(e) => handleInputChange(0, 'shortDescription', e.target.value)}
              required
            />
          </div>
          <div className='CF_input_element'>
            <label htmlFor='LongDescription'>Long Description:</label>
            <input
              type='text'
              id='LongDescription'
              name='LongDescription'
              value={formData.longDescription}
              onChange={(e) => handleInputChange(0, 'longDescription', e.target.value)}
              required
            />
          </div>
          <div className='CF_input_element'>
            <label htmlFor='PageLocation'>Page Location:</label>
            <input
              type='text'
              id='PageLocation'
              name='PageLocation'
              value={formData.pageLocation}
              onChange={(e) => handleInputChange(0, 'pageLocation', e.target.value)}
              required
            />
          </div>
          <div className='imageSection' key={0}>
          <label htmlFor={`Image${0}`}>Image:</label>
          <input
            type='file'
            id={`Image${0}`}
            name={`Image${0}`}
            onChange={(e) => handleInputChange(0, 'image', e.target.files)}
          />
          <label htmlFor={`ImageDescription${0}`}>Image Description:</label>
          <textarea
            id={`ImageDescription${0}`}
            name={`ImageDescription${0}`}
            onChange={(e) => handleInputChange(0, 'imageDescription', e.target.value)}
          />
        </div>
        {formData.images.map(( index) => (
          <div className='imageSection' key={index+1}>
            <label htmlFor={`Image${index+1}`}>Image:</label>
            <input
              type='file'
              id={`Image${index+1}`}
              name={`Image${index+1 }`}
              onChange={(e) => handleInputChange(index+1, 'image', e.target.files)}
            />
            <label htmlFor={`ImageDescription${index+1 }`}>Image Description:</label>
            <textarea
              id={`ImageDescription${index+1 }`}
              name={`ImageDescription${index+1 }`}
              onChange={(e) => handleInputChange(index , 'imageDescription', e.target.value)}
            />
            
          </div>
        ))}
        <i className='fa-solid fa-plus' id='plusImage' onClick={handlePlusClick}></i>

        
       
        </div>
      <div className='subMenu'>
        {formData.subMenus.map((submenu, submenuIndex) => (
          <div key={submenuIndex} className='submenuSection'>
            <h2>Submenu {submenuIndex + 1}</h2>
            <div className='CF_input_element'>
              <label htmlFor={`SubMenuName${submenuIndex}`}>Submenu Name:</label>
              <input
                type='text'
                className='submenuEle'
                id={`SubMenuName${submenuIndex}`}
                name={`SubMenuName${submenuIndex}`}
                value={submenu.name}
                onChange={(e) => handleSubMenuInputChange(submenuIndex, 'name', e.target.value)}
              />
            </div>
            <div className='CF_input_element'>
              <label htmlFor={`SubMenuLink${submenuIndex}`}>Submenu Link:</label>
              <input
                type='text'
                className='submenuEle'
                id={`SubMenuLink${submenuIndex}`}
                name={`SubMenuLink${submenuIndex}`}
                value={submenu.link}
                onChange={(e) => handleSubMenuInputChange(submenuIndex, 'link', e.target.value)}
              />
            </div>
            {submenu.content.map((content, contentIndex) => (
              <div key={contentIndex} className='submenuContentSection'>
                <h3>Content {contentIndex + 1}</h3>
                <div className='CF_input_element'>
                  <label htmlFor={`SubMenuHeading${submenuIndex}-${contentIndex}`}>Heading:</label>
                  <input
                    type='text'
                    className='submenuEle'
                    id={`SubMenuHeading${submenuIndex}-${contentIndex}`}
                    name={`SubMenuHeading${submenuIndex}-${contentIndex}`}
                    value={content.heading}
                    onChange={(e) =>
                      handleSubMenuInputChange(submenuIndex, 'heading', e.target.value, contentIndex)
                    }
                  />
                </div>
                <div className='CF_input_element'>
                    <label htmlFor={`SubMenuSubHeading${submenuIndex}-${contentIndex}`}>SubHeading:</label>
                    <input
                      type='text'
                      className='submenuEle'
                      id={`SubMenuSubHeading${submenuIndex}-${contentIndex}`}
                      name={`SubMenuSubHeading${submenuIndex}-${contentIndex}`}
                      value={content.subHeading}
                      onChange={(e) =>
                        handleSubMenuInputChange(submenuIndex, 'subHeading', e.target.value, contentIndex)
                      }
                    />
                  </div>
                  <div className='CF_input_element'>
                    <label htmlFor={`SubMenuShortDescription${submenuIndex}-${contentIndex}`}>Short Description:</label>
                    <input
                      type='text'
                      className='submenuEle'
                      id={`SubMenuShortDescription${submenuIndex}-${contentIndex}`}
                      name={`SubMenuShortDescription${submenuIndex}-${contentIndex}`}
                      value={content.shortDescription}
                      onChange={(e) =>
                        handleSubMenuInputChange(submenuIndex, 'shortDescription', e.target.value , contentIndex)
                      }
                    />
                  </div>
                  <div className='CF_input_element'>
                    <label htmlFor={`SubMenuLongDescription${submenuIndex}-${contentIndex}`}>Long Description:</label>
                    <input
                      type='text'
                      className='submenuEle'
                      id={`SubMenuLongDescription${submenuIndex}-${contentIndex}`}
                      name={`SubMenuLongDescription${submenuIndex}-${contentIndex}`}
                      value={content.longDescription}
                      onChange={(e) =>
                        handleSubMenuInputChange(submenuIndex, 'longDescription', e.target.value, contentIndex)
                      }
                    />
                  </div>
                  <div className='CF_input_element'>
                    <label htmlFor={`SubMenuPageLocation${submenuIndex}-${contentIndex}`}>Page Location:</label>
                    <input
                       className='submenuEle'
                      type='text'
                      id={`SubMenuPageLocation${submenuIndex}-${contentIndex}`}
                      name={`SubMenuPageLocation${submenuIndex}-${contentIndex}`}
                      value={content.pageLocation}
                      onChange={(e) =>
                        handleSubMenuInputChange(submenuIndex, 'pageLocation', e.target.value, contentIndex)
                      }
                    />
                  </div>
                <div className='CF_input_element'>
                  <label htmlFor={`SubMenuImage${submenuIndex}-${contentIndex}`}>Image:</label>
                  <input
                    type='file'
                    id={`SubMenuImage${submenuIndex}-${contentIndex}`}
                    name={`SubMenuImage${submenuIndex}-${contentIndex}`}
                    onChange={(e) =>
                      handleSubMenuInputChange(submenuIndex, 'image', e.target.files, contentIndex)
                    }
                  />
                </div>
                <div className='CF_input_element'>
                  <label htmlFor={`SubMenuImageDescription${submenuIndex}-${contentIndex}`}>
                    Image Description:
                  </label>
                  <textarea
                    id={`SubMenuImageDescription${submenuIndex}-${contentIndex}`}
                    name={`SubMenuImageDescription${submenuIndex}-${contentIndex}`}
                    onChange={(e) =>
                      handleSubMenuInputChange(submenuIndex, 'imageDescription', e.target.value, contentIndex)
                    }
                  />
                </div>
              </div>
            ))}
            <i className='fa-solid fa-plus' onClick={() => handleContentPlusClick(submenuIndex)}></i> Content
            <i className='fa-solid fa-plus' onClick={handleSubMenuPlusClick}></i> Submenu
          </div>
        ))}
      </div>
        <button type='submit' className='CF_submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContentForm;
