import React, { useContext,useEffect } from 'react'
// import { IoFastFoodSharp } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { FaSearch } from "react-icons/fa";
import { FaRegFaceSmileWink } from "react-icons/fa6";
import { dataContext } from '../Context/UserContext';
import { food_items } from '../../food';
import { useSelector } from 'react-redux';

const Navbar = () => {

    let {input,setInput,setCate,setShowCart} = useContext(dataContext)
    useEffect(() => {
      setCate(food_items.filter((items)=>items.food_name.toLowerCase().includes(input.toLowerCase())))
    }, [input])
    let items =useSelector(state=>state.cart)
    console.log(items)
    return (
        <>
            <div className='w-full  h-[100px] text-black flex justify-between items-center px-5 md:px-8' >

            <div className='w-[80px] h-[80px]  bg-white flex flex-col justify-center items-center rounded-lg shadow-md'>
                <FaRegFaceSmileWink className='w-[30px] h-[30px] text-[#00b894] ' />
                <p className='text-[15px] font-extrabold text-red-600 text-center'>Yummy Bite</p>
            </div>        

            <form className='w-[40%] md:w-[70%] h-[60px] bg-white flex items-center px-5 gap-5 rounded-md shadow-md' onSubmit={((e)=>e.preventDefault())}>
                <FaSearch className='w-[30px] h-[30px] text-[#00b894]' />
                <input type="text" placeholder='Search' className=' w-full outline-none bg-white rounded-md text-slate-600 text-[20px]' onChange={(e)=>setInput(e.target.value)} value={input}/>
            </form>

            <div className='w-[80px] h-[80px] bg-white shadow-md flex justify-center items-center rounded-lg relative' onClick={()=>setShowCart(true)}>
                <span className='absolute top-1 right-3 font-bold text-red-600 text-[18px]'>{items.length}</span>
                <LuShoppingBag className='w-[30px] h-[30px] text-[#00b894] ' />
            </div>
            
        </div>
        </>
    )
}

export default Navbar