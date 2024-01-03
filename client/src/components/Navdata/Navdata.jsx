import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navdata.css';

const Navdata = ({ onLinkClick }) => {
  const [array, setArray] = useState([]);

  const handleLinkClick = (link,element) => {
    onLinkClick(link,element);
  };

  useEffect(() => {
    fetch("http://localhost:7000/api/v1/menu")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setArray(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="navbar">
      <div className="navoptions">
        {array.map((element, index) => (
          <div className="navoption" key={index} id='lol'>
      <Link to={element.link === '/home' ? element.link : '/Subpage'} onClick={() => handleLinkClick(element.name,element)}>
              {element.name}
            </Link>
            {element.subMenus.length > 0 && (
  <ul className="dropdown">
    {element.subMenus.map((subelement, index) => (
      <Link to={subelement.link} key={index}>
        <li>{subelement.name}</li>
      </Link>
    ))}
  </ul>
)}
        
          </div>
        ))}

        <div className="navoption" id="Ecommerce">
          <Link to={`/Ecommerce`}>Ecommerce</Link>
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
