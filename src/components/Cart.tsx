import React from 'react'
import CartIyem from './CartIyem'
import '../style/Cart.css'
interface Cart{
    name:string;
    id:number,
    price:number,
    img:string,
    number:number,
    quantity:number,
}
interface CartList{
    carts:Cart[],
    onClickIncrease:any,
    onClickDescrease:any,
    onClickRemove:any,
    money:number,
}
export default function CartComponent(props:CartList) {
    const {carts,onClickIncrease,onClickDescrease,onClickRemove,money}=props;
    const check=()=>{
        if(carts.length==0){
            return (
                <div><h3>My cart is empty</h3></div>
            )
        }else{
            return(
                <table className='table-cart'>
                    <tbody>
                        {carts.map((cartItem)=>{
                            return (<CartIyem 
                                    cartItem={cartItem} 
                                    key={cartItem.id} 
                                    onClickIncrease={onClickIncrease} 
                                    onClickDescrease={onClickDescrease}
                                    onClickRemove={onClickRemove}
                                ></CartIyem>)
                        })}
                    </tbody>
                    <tr className='footer-part'>
                        <td><h4>Total:</h4></td>
                        <td>{money+'đ'}</td>
                    </tr>
                </table>
            )
        }
    }
  return (
    <div className='total'>
    <h3>My cart</h3>
    {check()}
    </div>
  )
}
