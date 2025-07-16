import React from 'react'
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { AddItem } from '../Redux/cartSlice';
import { toast } from 'react-toastify';

const Card = ({image,name,id,price,type}) => {
    let dispatch = useDispatch()
    return (
        <>
            <div className="w-[300px] h-[380px] bg-white my-2 rounded-xl flex flex-col justify-center  items-center shadow-lg hover:border-2 border-[#ff6b6b] transition-all">

                {/* Food Image */}
                <img
                    src={image}
                    alt="Pancake"
                    className="w-[250px] h-[250px] object-cover rounded-lg"
                />

                {/* Price and Category */}
                <div className="flex flex-col items-start gap-1 mt-2">
                    <h3 className="text-xl font-bold">{name}</h3>

                    <div className="w-[250px] flex justify-between items-center">
                        <p className="text-xl font-bold text-[#00b894]">{"Rs."+price}</p>
                        <div className="flex items-center gap-1 text-[#00b894]">
                            {type === 'veg' ? (<LuLeafyGreen className="w-5 h-5" />) : ( <GiChickenOven className="w-6 h-6" /> )}
                            <p className="capitalize font-semibold">{type}</p>
                        </div>
                    </div>


                    {/* Add to dish button */}
                    <button className="w-full h-8 bg-[#ff6b6b] hover:bg-[#ffeaa7] hover:text-[#ae9850] text-white font-bold rounded-md transition-all duration-800" onClick={()=>{dispatch(AddItem({id:id,name:name,price:price,image:image,qty:1})); toast.success(name +" Added")}}>Add to Cart</button>
                    {/* <button className="w-full h-8 bg-green-500 rounded-md text-white font-bold hover:bg-green-400 mt-2" onClick={()=>dispatch(AddItem({id:id,name:name,price:price,image:image,qty:1}))}>
                        Add to Dish
                    </button>  */}
                </div>
            </div>
        </>
    )
}

export default Card