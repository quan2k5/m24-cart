import React from 'react'
import '../style/CartItem.css'
interface Cart{
    name:string;
    id:number,
    price:number,
    img:string,
    number:number,  
    quantity:number,
}
interface CartItem{
    cartItem:Cart;
    onClickIncrease:any;
    onClickDescrease:any;
    onClickRemove:any
}
export default function CartIyem(props:CartItem){
    const {cartItem,onClickIncrease,onClickDescrease,onClickRemove}=props;
    const handleClickIncrease=(cartItem:Cart)=>{
        onClickIncrease(cartItem);
    }
    const handleClickDecrease=(cartItem:Cart)=>{
       onClickDescrease(cartItem);
    }
    const handleClickRemove=(cartItem:Cart)=>{
        onClickRemove(cartItem)
    }
  return (
    <tr key={cartItem.id}>
        <td><img src={cartItem.img} alt="" /></td>
        <td>{cartItem.name}</td>
        <td className='action-box'>
            <button className='box' onClick={()=>{handleClickIncrease(cartItem)}}><i className='bx bx-plus'></i></button>
            <div  className='box'>{cartItem.number}</div>
            <button  className='box' onClick={()=>{handleClickDecrease(cartItem)}}><i className='bx bx-minus'></i></button>
        </td>
        <td><i className='bx bxs-trash-alt' onClick={()=>{handleClickRemove(cartItem)}}></i></td>
    </tr>
  )
}
