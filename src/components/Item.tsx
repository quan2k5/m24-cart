import React from 'react'
import '../style/Item.css'
interface Product{
    name:string,
    img:string,
    quantity:number,
    id:number,
    price:number,
}
interface Item{
    item:Product;
    addProduct:()=>void;
}
export default function Item(props:Item) {
  return (
    <div className='box-item'>
        <img src={props.item.img} alt="" />
        <h4>{props.item.name}</h4>
        <p>{props.item.price+'đ'}</p>
        <button className='add-cart' onClick={props.addProduct}>
            <i className='bx bxs-cart'></i>
            <span>Thêm vào giỏ hàng</span>
        </button>
    </div>
  )
}
