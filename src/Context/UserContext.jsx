import React, { createContext, useState } from 'react'
import { food_items } from '../../food'

export const dataContext = createContext()

const UserContext = ({children}) => {
    let [input,setInput] = useState("")
    const [cate,setCate] = useState(food_items)
    const [counter,setCounter] = useState(0)
    let [showCart,setShowCart] = useState(false)
    let data={
        input,setInput,cate,setCate,showCart,setShowCart,counter,setCounter
    }
  return (
    <div>
       <dataContext.Provider value={data}>{children}</dataContext.Provider>
    </div>
  )
}

export default UserContext