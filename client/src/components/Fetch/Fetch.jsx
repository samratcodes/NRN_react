// Fetch.jsx
import React from 'react';
import Card from '../Ecommerce/Card';
import './Fetch.css';
const Fetch = () => {
    const jsonData = [
        {
          "id": 13,
          "title": "Smartwatch XYZ",
          "description": "A high-tech smartwatch with advanced features.",
          "price": 129.99,
          "discountPercentage": 8.15,
          "rating": 4.75,
          "stock": 50,
          "brand": "XYZ",
          "category": "wearables",
          "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
          "images": [
            "https://i.dummyjson.com/data/products/13/1.jpg",
            "https://i.dummyjson.com/data/products/13/2.jpg",
            "https://i.dummyjson.com/data/products/13/3.jpg",
            "https://i.dummyjson.com/data/products/13/thumbnail.jpg"
          ]
        },
        
        {
          "id": 15,
          "title": "Gaming Mouse",
          "description": "A high-performance gaming mouse with customizable RGB lighting.",
          "price": 49.99,
          "discountPercentage": 15.2,
          "rating": 4.8,
          "stock": 30,
          "brand": "GameMaster",
          "category": "gaming accessories",
          "thumbnail": "https://i.dummyjson.com/data/products/15/thumbnail.jpg",
          "images": [
            "https://i.dummyjson.com/data/products/15/1.jpg",
            "https://i.dummyjson.com/data/products/15/2.jpg",
            "https://i.dummyjson.com/data/products/15/3.jpg",
            "https://i.dummyjson.com/data/products/15/thumbnail.jpg"
          ]
        },
        {
          "id": 16,
          "title": "4K Smart TV",
          "description": "Experience stunning visuals with this 4K smart TV.",
          "price": 799.99,
          "discountPercentage": 10.8,
          "rating": 4.7,
          "stock": 25,
          "brand": "TechVision",
          "category": "electronics",
          "thumbnail": "https://i.dummyjson.com/data/products/16/thumbnail.jpg",
          "images": [
            "https://i.dummyjson.com/data/products/16/1.jpg",
            "https://i.dummyjson.com/data/products/16/2.jpg",
            "https://i.dummyjson.com/data/products/16/3.jpg",
            "https://i.dummyjson.com/data/products/16/thumbnail.jpg"
          ]
        },
        {
          "id": 17,
          "title": "Fitness Tracker",
          "description": "Track your fitness goals with this advanced fitness tracker.",
          "price": 79.99,
          "discountPercentage": 9.3,
          "rating": 4.6,
          "stock": 35,
          "brand": "FitTech",
          "category": "wearables",
          "thumbnail": "https://i.dummyjson.com/data/products/17/thumbnail.jpg",
          "images": [
            "https://i.dummyjson.com/data/products/17/1.jpg",
            "https://i.dummyjson.com/data/products/17/2.jpg",
            "https://i.dummyjson.com/data/products/17/3.jpg",
            "https://i.dummyjson.com/data/products/17/thumbnail.jpg"
          ]
        },
        {"id":1,
        "title":"iPhone 9",
        "description":"An apple mobile which is nothing like apple",
        "price":549,
        "discountPercentage":12.96,
        "rating":4.69,
        "stock":94,
        "brand":"Apple"
        ,"category":"smartphones",
        "thumbnail":"https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        "images":["https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg"]},
        {"id":2,
        "title":"iPhone X",
        "description":"SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        "price":899,
        "discountPercentage":17.94,
        "rating":4.44,
        "stock":34,
        "brand":"Apple",
        "category":"smartphones",
        "thumbnail":"https://i.dummyjson.com/data/products/2/thumbnail.jpg",
        "images":["https://i.dummyjson.com/data/products/2/1.jpg",
        "https://i.dummyjson.com/data/products/2/2.jpg",
        "https://i.dummyjson.com/data/products/2/3.jpg",
        "https://i.dummyjson.com/data/products/2/thumbnail.jpg"]}
        ,{"id":3,
        "title":"Samsung Universe 9",
        "description":"Samsung's new variant which goes beyond Galaxy to the Universe",
        "price":1249,
        "discountPercentage":15.46,
        "rating":4.09,
        "stock":36,
        "brand":"Samsung",
        "category":"smartphones",
        "thumbnail":"https://i.dummyjson.com/data/products/3/thumbnail.jpg",
        "images":["https://i.dummyjson.com/data/products/3/1.jpg"]},
        {"id":4,
        "title":"OPPOF19",
        "description":"OPPO F19 is officially announced on April 2021.",
        "price":280,
        "discountPercentage":17.91,
        "rating":4.3,
        "stock":123,
        "brand":"OPPO",
        "category":"smartphones",
        "thumbnail":"https://i.dummyjson.com/data/products/4/thumbnail.jpg",
        "images":["https://i.dummyjson.com/data/products/4/1.jpg",
        "https://i.dummyjson.com/data/products/4/2.jpg",
        "https://i.dummyjson.com/data/products/4/3.jpg",
        "https://i.dummyjson.com/data/products/4/4.jpg",
        "https://i.dummyjson.com/data/products/4/thumbnail.jpg"]},
        {"id":4,
        "title":"OPPOF19",
        "description":"OPPO F19 is officially announced on April 2021.",
        "price":280,
        "discountPercentage":17.91,
        "rating":4.3,
        "stock":123,
        "brand":"OPPO",
        "category":"smartphones",
        "thumbnail":"https://i.dummyjson.com/data/products/4/thumbnail.jpg",
        "images":["https://i.dummyjson.com/data/products/4/1.jpg",
        "https://i.dummyjson.com/data/products/4/2.jpg",
        "https://i.dummyjson.com/data/products/4/3.jpg",
        "https://i.dummyjson.com/data/products/4/4.jpg",
        "https://i.dummyjson.com/data/products/4/thumbnail.jpg"]},
        {"id":4,
        "title":"OPPOF19",
        "description":"OPPO F19 is officially announced on April 2021.",
        "price":280,
        "discountPercentage":17.91,
        "rating":4.3,
        "stock":123,
        "brand":"OPPO",
        "category":"smartphones",
        "thumbnail":"https://i.dummyjson.com/data/products/4/thumbnail.jpg",
        "images":["https://i.dummyjson.com/data/products/4/1.jpg",
        "https://i.dummyjson.com/data/products/4/2.jpg",
        "https://i.dummyjson.com/data/products/4/3.jpg",
        "https://i.dummyjson.com/data/products/4/4.jpg",
        "https://i.dummyjson.com/data/products/4/thumbnail.jpg"]}    
     ];

  return (
    <div class='Fetch'>
      {jsonData.map((item) => (
        <Card
        price={item.price}
          key={item.id}
          title={item.title}
          description={item.description}
          thumbnail={item.thumbnail}
        />
      ))}
    </div>
  );
};

export default Fetch;
