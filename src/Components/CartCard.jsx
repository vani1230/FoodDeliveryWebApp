import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { RemoveItem,IncrementQty,DecrementQty } from '../Redux/cartSlice';
import { toast } from "react-toastify";

const CartCard = ({name,price,image,id,qty}) => {
    let dispatch=useDispatch()
  return (
    <div className="w-full h-[130px] p-3 rounded-xl shadow-xl flex flex-row gap-4 bg-white">
  {/* Image Section */}
  <div className="w-[120px] h-full overflow-hidden rounded-lg">
    <img
      src={image}
      alt={name}
      className="object-cover w-full h-full rounded-lg"
    />
  </div>

  {/* Content Section */}
  <div className="flex-1 flex flex-col justify-between">
    <div className="flex justify-between items-start">
      <h2 className="text-lg font-semibold text-gray-700">{name}</h2>
      <span className="text-green-500 font-bold text-lg">
        {"Rs." + price + "/-"}
      </span>
    </div>

    {/* Quantity + Delete */}
    <div className="flex justify-between items-center mt-2">
      <div className="w-[100px] h-[40px] flex rounded-md overflow-hidden border-2 border-green-500">
        <button
          onClick={() => dispatch(DecrementQty(id))}
          className="w-[30%] bg-slate-100 text-green-600 font-bold"
        >
          -
        </button>
        <div className="w-[40%] bg-slate-200 text-green-700 font-semibold flex items-center justify-center">
          {qty}
        </div>
        <button
          onClick={() => dispatch(IncrementQty(id))}
          className="w-[30%] bg-slate-100 text-green-600 font-bold"
        >
          +
        </button>
      </div>

      <RiDeleteBinLine
        onClick={() => {dispatch(RemoveItem(id)); toast.error(name+" Removed")}}
        className="w-[28px] h-[28px] text-red-500 hover:text-gray-600 cursor-pointer"
      />
    </div>
  </div>
</div>

  )
}

export default CartCard