import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navdata.css';

const Navdata = ({ onLinkClick }) => {
  const [array, setArray] = useState([]);
  const [active, setActive] = useState(true);

  const handleLinkClick = (link, element) => {
    onLinkClick(link, element, array);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:7000/api/v1/menu");
        const data = await response.json();
        console.log(data.data);
        setArray(data.data);
        nonClick(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const nonClick = (array) => {
    onLinkClick('Home',[], array);
    setActive(false);
  };

  return (
    <div className="navbar">
      <div className="navoptions">
        {array.map((element, index) => (
          <div className="navoption" key={index} id='lol'>
            <Link to={element.link === '/home' ? element.link : '/Subpage'} onClick={() => handleLinkClick(element.name, element)}>
              {element.name}
            </Link>
            {element.subMenus.length > 0 && (
              <ul className="dropdown">
                {element.subMenus.map((subelement, subIndex) => (
                  <Link to={subelement.link} key={subIndex}>
                    <li>{subelement.name}</li>
                  </Link>
                ))}
              </ul>
            )}
          </div>
        ))}

        <div className="navoption" id="Ecommerce">
          <Link to={`/Ecommerce`} onClick={() => handleLinkClick('Ecommerce', { name: 'Ecommerce', subMenus: [] })}>
            Ecommerce
          </Link>
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
