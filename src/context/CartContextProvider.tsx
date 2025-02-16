import { createContext, useReducer, useState, type ReactNode } from 'react'
import type { FormInput } from '../pages/Cart'
import {useNavigate} from 'react-router-dom'
import {v4 as uuid} from 'uuid'

export interface itemCart {
  id: string,
  title: string,
  image: string,
  price: number,
  quantity: number
}

interface OrderProps extends FormInput {
  id: string 
  items : itemCart[]
}

interface CartContextProps {
  cart: itemCart[]
  addItemCart: (item:itemCart)=> void
  incrementQuantityItem: (item:string)=> void
  decrementQuantityItem: (item:string)=> void
  removeItemCart: (item:string)=> void
  newOrder: ({}:FormInput)=> void
  order: OrderProps[]
}

interface CartContextProviderType {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

export function CartContextProvider({ children }:CartContextProviderType) {
  const [cart, dispatch] = useReducer((state: itemCart[],action: any)=> {

    if(action.type === "DECREMENT_QUANTITY_ITEM") {
      return state.map(cartItem => 
        cartItem.id === action.payload.itemId && cartItem.quantity > 1 ?
        {...cartItem,quantity: cartItem.quantity -1}:
        cartItem
      )
    }

    if(action.type === "INCREMENT_QUANTITY_ITEM") {
      return state.map(cartItem => 
        cartItem.id === action.payload.itemId  ?
        {...cartItem,quantity: cartItem.quantity +1}:
        cartItem
      )
    }

    if(action.type === "ADD_NEW_ITEM_CART") {

      const itemExist = state.find(item => item.id === action.payload.newItem.id)

      if(itemExist) {
        return state.map(item => item.id === itemExist.id ? 
          {...item,quantity: item.quantity + action.payload.newItem.quantity}:
          item
        )
      }

      return [...state , action.payload.newItem]
    }

    if(action.type === "REMOVE_ITEM_CART") {
      console.log(action.payload.itemId)
      return state.filter(item => item.id !== action.payload.itemId);
    }

    return state 
  },[])
  const [order,setOrder] = useState<OrderProps[]>([])
  const navigate = useNavigate()

  function newOrder(orderData:FormInput) {
    const newOrderId = uuid()
    
    setOrder(prevOrder => [
      ...prevOrder, 
      {id: newOrderId,...orderData,items:cart}])

    navigate(`/success/${newOrderId}`)
    
    
    //setCart([])
  }

  function incrementQuantityItem(itemId: string) {

    dispatch({
      type: "INCREMENT_QUANTITY_ITEM",
      payload: {
        itemId
      }
    })


    // setCart(prevCart =>
    //   prevCart.map(cartItem =>
    //     cartItem.id === itemId
    //       ? { ...cartItem, quantity: cartItem.quantity + 1 }
    //       : cartItem,
    //   ),
    // )
  }

  function decrementQuantityItem(itemId: string) {
    
    dispatch({
      type: "DECREMENT_QUANTITY_ITEM",
      payload: {
         itemId
      }
    })
    
    
    // setCart(prevCart =>
    //   prevCart
    //     .map(cartItem =>
    //       cartItem.id === itemId
    //         ? { ...cartItem, quantity: Math.max(cartItem.quantity - 1, 0) }
    //         : cartItem,
    //     )
    //     .filter(cartItem => cartItem.quantity > 0),
    // )
  }

  function addItemCart(newItem : itemCart) {

    console.log(newItem)
    
    dispatch({
      type: "ADD_NEW_ITEM_CART",
      payload: {
        newItem
      }
    })
    
    
    // setCart(prevCart => {
    //   const itemExists = prevCart.find(item => item.id === newItem.id)

    //   if (itemExists) {
    //     return prevCart.map(item =>
    //       item.id === newItem.id
    //         ? { ...item, quantity: item.quantity + newItem.quantity }
    //         : item,
    //     )
    //   }
    //   return [...prevCart, newItem]
    // })
  }

  function removeItemCart(itemId: string) {

    dispatch({
      type: "REMOVE_ITEM_CART",
      payload: {
        itemId
      }
    })

    // const updatedCart = cart.filter(cartItem => cartItem.id !== itemId)

    // setCart(updatedCart)
  }

  return (

    <CartContext.Provider
      value={{
        newOrder,
        order,
        removeItemCart,
        incrementQuantityItem,
        decrementQuantityItem,
        cart,
        addItemCart,
      }}
    > {children}
    </CartContext.Provider>

  )
}
