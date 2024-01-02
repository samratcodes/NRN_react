import React, { useEffect, useState } from 'react';
import './Update.css'
const Update = () => {
    const [Data, setData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:7000/api/v1/menu")
          .then((res) => res.json())
          .then((data) => {
            setData(data.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);
  return (
    <div className='Update_form'>
        <h1>
            Update Form
        </h1>
  <div className='updateContent'>
  <div className='updateElement' >
          <div className='UE_nameTop'> Name</div>
          <div className='UE_elementTop'>Navoption link</div>
          <div className="edit">Edit : </div>
        </div>
  {Data.map((element, index) => (
        <div key={index}className='updateElement' >
          <div className='UE_name'>{element.name}</div>
          <div className='UE_element'>{element.link}</div>
          <i class="fa-solid fa-pen-to-square" ></i>
        </div>
      ))
      }
  </div>
    </div>
  )
}

export default Update
