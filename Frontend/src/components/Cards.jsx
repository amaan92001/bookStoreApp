import React from 'react'

// here catching props from freebook
const Cards = ({item}) => {
  return (
    <>
    <div> 
    <div className="card bg-base-100 w-96 shadow-xl my-3 hover:scale-105 duration-300 dark:bg-slate-900 dark:text-white border">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="badge badge-outline hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
    </div>
  </div>
</div>
      </div>
    </>
  )
}

export default Cards
