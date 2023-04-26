import { createContext, useContext, useState } from "react";
import ShoppingCart from "../components/layouts/Header/ShoppingCart";
import CartItem from "../components/layouts/Header/CartItem";
const shoppingCartContext = createContext({})
export function useShoppingCart(){
    return useContext(shoppingCartContext)
}
export function ShoppingCartProvider({children}){
    const [isOpen,setIsOpen] = useState(false)
    const [cartItems,setCartItems] = useState([{
        id:0,
        quantity:0,
    }])
    const cartQuantity = cartItems.reduce((quantity,item)=> item.quantity + quantity,0)

    const openCart =()=> setIsOpen(true)
    const closeCart=()=> setIsOpen(false)
    function getItemQuantity(id){
        return cartItems.find(item=>item.id ===id)?.quantity ||0
    }
    function increaseCartQuantity(id){
        setCartItems(currItems=>{
            if(currItems.find(item=>item.id===id)==null ){
                return [...currItems,{id,quantity:1}]
            } else{
                return currItems.map(item=>{
                    if(item.id===id){
                        return {...item,quantity:item.quantity+1}
                    }else {
                        return item
                    }
                    
                })
            }
        })
    }
    function removeFromCart(id){
        setCartItems(currItems=>{
            return currItems.filter(item=>item.id !==id)
        })
    }
    function decreaseCartQuantity(id){
        setCartItems(currItems=>{
            if(currItems.find(item=>item.id===id)?.quantity===1){
                return currItems.filter(item=>item.id !==id)
            } else{
                return currItems.map(item=>{
                    if(item.id===id){
                        return {...item,quantity:item.quantity-1}
                    }else {
                        return item
                    }
                    
                })
            }
        })
    }
   
    return (
    <shoppingCartContext.Provider 
    value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
        cartItems,
        cartQuantity,
       }}>
        {children}
        <ShoppingCart isOpen={isOpen} />
    </shoppingCartContext.Provider>
    )
}