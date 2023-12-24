import React, { useEffect, useState } from 'react';
import './Navdata.css';

const Navdata = () => {
  const [ram, setRam] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7000/api/v1/menu")
      .then((res) => res.json())
      .then((data) => {
        setRam(data.data);
        console.log(data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="navbar">
      <div className="navoptions">
  
        {ram.map((element, index) => (
          <div className="navoption" key={index} id='lol'>
            <a href={`${element.link}`}>{element.name}</a>
          
            {element.subMenu.length > 0  && (
  <ul className="dropdown">
    {element.subMenu.map((subelement, index) => (
      <a href={`${subelement.link}`} key={index}>
        <li>{subelement.name}</li>
      </a>
    ))}
  </ul>
)}

          </div>
        ))}

        <div className="navoption" id="Ecommerce">
          <a href={`/Ecommerce`}>Ecommerce</a>
          
        </div>

        <div>
          <span className="button">
            <i className="fa-solid fa-cart-shopping"></i>Cart
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navdata;
