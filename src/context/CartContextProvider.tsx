import { createContext, useState, type ReactNode } from 'react'

export interface itemCart {
  id: string,
  title: string,
  image: string,
  price: number,
  quantity: number
}

interface CartContextProps {
  cart: itemCart[]
  addItemCart: (item:itemCart)=> void
  incrementQuantityItem: (item:string)=> void
  decrementQuantityItem: (item:string)=> void
  removeItemCart: (item:string)=> void
}

interface CartContextProviderType {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

export function CartContextProvider({ children }:CartContextProviderType) {
  const [cart, setCart] = useState<itemCart[]>([])

  function incrementQuantityItem(itemId: string) {
    setCart(prevCart =>
      prevCart.map(cartItem =>
        cartItem.id === itemId
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem,
      ),
    )
  }

  function decrementQuantityItem(itemId: string) {
    setCart(prevCart =>
      prevCart
        .map(cartItem =>
          cartItem.id === itemId
            ? { ...cartItem, quantity: Math.max(cartItem.quantity - 1, 0) }
            : cartItem,
        )
        .filter(cartItem => cartItem.quantity > 0),
    )
  }

  function addItemCart(newItem : itemCart) {
    setCart(prevCart => {
      const itemExists = prevCart.find(item => item.id === newItem.id)

      if (itemExists) {
        // ✅ Se o item já existe, incrementamos a quantidade
        return prevCart.map(item =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item,
        )
      }

      // ✅ Se o item não existe, adicionamos ao carrinho
      return [...prevCart, newItem]
    })
  }

  function removeItemCart(itemId: string) {
    const updatedCart = cart.filter(cartItem => cartItem.id !== itemId)

    setCart(updatedCart)
  }

  return (

    <CartContext.Provider
      value={{
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
