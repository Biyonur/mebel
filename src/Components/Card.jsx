import React from 'react'

function Card(props) {
    const {name, price, img, describe, category}=props
  return (
    <div className='card'>
    <img src={img} alt="" className="card-img" />
    <div className="row">
        <h3 className="card-name">{name}</h3>
        <p className="card-price">
            Narxi:{price}
        </p>
    </div>
    <p className="card-text">{describe}</p>
    <p>
        Bo'lim:{category}
    </p>
    <button className="card-btn btn">Order now</button>
    </div>
  )
}

export default Card