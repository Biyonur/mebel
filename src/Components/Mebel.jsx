import React from 'react'

import {useState, useEffect } from "react"
import Card from "./Card"

function Mebel() {
    const [furnitureData, setFurnitureData] = useState([]);
    const [currentCategory, setCurrentCategory] = useState("");
    const [isLoading, setIsloading] = useState(true);

 useEffect(() => {
    setIsloading(true);
    fetch("https://my-json-server.typicode.com/anvarortiqov/mebel/mebel/")
    .then((response) => response.json())
    .then((data) => {
        setFurnitureData(data);
        setIsloading(false);
    })
    .catch((error) => console.log(error));
 }, []);

 const handleCategoryFilter = (category) => {
    setCurrentCategory(category);
 };
 const handleAllButtonClick = () => {
    setCurrentCategory("");
 }
 const filteredFurniture = currentCategory
 ? furnitureData.filter(
        (furniture) => furniture.category === currentCategory
 )
 : furnitureData;
  return (
    <div className='container'>y
        <button className="btn-cat" onClick={() => handleCategoryFilter("chair")}>Chair</button>
        <button className="btn-cat" onClick={() => handleCategoryFilter("sofa")}>sofa</button>
        <button className="btn-cat" onClick={() => handleCategoryFilter("table")}>table</button>
        <button className="btn-cat" onClick={() => handleCategoryFilter("bed")}>bed</button>
        <button className="btn-cat" onClick={() => handleCategoryFilter("wardrobe")}>wardrope</button>
        <button className="btn-cat" onClick={() => handleCategoryFilter("almirah")}>sofa</button>
        <button className="btn-cat" onClick={() => handleCategoryFilter("dimple")}>dimple</button>
        <button className="btn-cat" onClick={() => handleCategoryFilter("rack")}>rack</button>
        <button className="btn-cat" onClick={() => handleCategoryFilter("stand")}>stand</button>
        <button className="btn-cat" onClick={handleAllButtonClick}>All</button>
        {isLoading && <p>Loading...</p>}

        <div id='mebel-list' className='mebel-list'>
            {filteredFurniture && filteredFurniture.map((mebel) => (
                <Card
                key={mebel.name}
                name={mebel.name}
                describe={mebel.description}
                img={mebel.image}
                price={mebel.price}
                category={mebel.category}
                />
            ))}
        </div>
        
        
    </div>
  )
}

export default Mebel