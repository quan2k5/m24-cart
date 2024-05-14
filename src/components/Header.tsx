import React, { useState } from 'react'
import '../style/Header.css'
import CartComponent from './Cart';
interface Cart{
    name:string;
    id:number,
    price:number,
    img:string,
    number:number,
    quantity:number,
}
interface Props{
    cartTotal:number;
    carts:Cart[],
    onClickIncrease:any,
    onClickDescrease:any,
    onClickRemove:any,
    money:number,
}
export default function Header(prop:Props) {
    const {cartTotal,carts,onClickIncrease,onClickDescrease,onClickRemove,money}=prop;
    const [checked,setChecked]=useState<boolean>(false);
    const handleClick=()=>{
        setChecked(!checked);
    }
  return (
    <header>
        <div className='right-part'>
            <span>Trang chủ</span>
            <span>Danh sách sản phẩm</span>
        </div>
        <div className='left-part'>
            <i className='bx bxs-cart' onClick={handleClick}></i>
           {cartTotal>0? <div className='number-cart'>{cartTotal}</div>:<></>}
        </div>
        {checked?
         <CartComponent 
         carts={carts} 
         money={money}
         onClickIncrease={onClickIncrease} 
         onClickDescrease={onClickDescrease}
         onClickRemove={onClickRemove}
         >
         </CartComponent>
         :<></>
        }
    </header>
  )
}
