import React from 'react'
import './ContentForm.css'
const ContentForm = () => {
  return (
      <div className='ContentForm'>
      <h1 className='CF_title'>Content Form</h1>
      <form className='CF_form'>
      <div className="topSection">
      <div className='CF_input_element'>
      <label htmlFor="ContentName">Menu:</label>
      <input type="text" id="ContentName" name="ContentName" />
      </div>
      <div className='CF_input_element'>
      <label htmlFor="ContentLink">Link:</label>
      <input type="text" id="ContentLink" name="ContentLink" required/>
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
        <div  className='imageSection'>
      <label htmlFor="Image">Image:</label>
      <input type="file" id="Image" name="Image" required/>
      <label htmlFor="ImageDescription">Image Description:</label>
      <textarea id="ImageDescription" name="ImageDescription" required/>
      </div>
        <button type="submit" className='CF_submit'> Submit</button>
      </form>
    </div>
  )
}

export default ContentForm
