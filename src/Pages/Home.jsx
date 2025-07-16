import React, { useContext } from "react";
import Navbar from "../Components/Navbar";
import Categories from "../../Category";
import { food_items } from "../../food";
import Card from "../Components/Card";
import { dataContext } from "../Context/UserContext";
import { RxCross2 } from "react-icons/rx";
import CartCard from "../Components/CartCard";
import { useSelector } from "react-redux";

const Home = () => {
  let { cate, setCate, input, setShowCart, showCart } = useContext(dataContext);
  const Filter = (category) => {
    if (category == "All") setCate(food_items);
    else setCate(food_items.filter((item) => item.food_category == category));
  };
  let items = useSelector((state) => state.cart);
  let subTotal = items.reduce(
    (total, item) => total + item.price * item.qty,
  0);
  let deliveryFee = 20;
  let taxes = (subTotal * 0.5) / 100;
  let total = subTotal + deliveryFee + taxes;
  console.log(total);
  return (
    <>
      <div className="w-[100%] h-[100%] bg-[#fcfafa]">
        {/* NAVIGATION SECTION */}
        <Navbar />

        {/* CATEGORIES SECTION */}
        {!input ? (
          <div className="flex justify-center items-center gap-5 flex-wrap">
            {Categories.map((item) => (
              <div
                key={item.id}
                className="w-[150px] h-[150px] bg-white flex flex-col justify-center items-center rounded-xl shadow-md hover:bg-[#ece4e9] text-[#2d3436] hover:text-[#ff6b6b] hover:scale-[1.02] transition-all duration-400"
                onClick={() => Filter(item.name)}
              >
                <div>{item.icon}</div>
                <div className="font-bold capitalize">{item.name}</div>
              </div>
            ))}
          </div>
        ) : null}

        {/* CARD SECTION */}

        <>
          {cate.length != 0 ? (
            <div className=" w-[100%] h-[100%] flex flex-wrap gap-5 justify-center items-center ">
              {cate.map((item) => (
                <div key={item.id}>
                  <Card
                    image={item.food_image}
                    name={item.food_name}
                    id={item.id}
                    price={item.price}
                    type={item.food_type}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-red-500 flex justify-center items-center font-semibold text-5xl">
              No Items Found
            </div>
          )}
        </>

        {/* CART DIV */}
        <div
          className={`w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-2xl p-6 ${
            showCart ? "translate-x-0" : "translate-x-full"
          } overflow-auto  transition-all ease-in-out duration-800 `}
        >
          <header className=" w-[100%] flex flex-row justify-between">
            <span className="text-green-500 text-[18px] font-semibold">
              Order Items
            </span>
            <RxCross2
              className="w-[30px] h-[30px] text-green-500 text-[18px] font-extrabold hover:text-slate-600 cursor-pointer"
              onClick={() => setShowCart(false)}
            />
          </header>
          {items.length > 0 ? (
            <>
              <div className="w-full mt-8 flex flex-col gap-8">
                {items.map((item) => (
                  <div key={item.id}>
                    <CartCard
                      name={item.name}
                      price={item.price}
                      image={item.image}
                      id={item.id}
                      qty={item.qty}
                    />
                  </div>
                ))}
              </div>
              <div className="w-full border-t-2 border-gray-600 mt-7 flex flex-col gap-4 p-8 border-b-2">
                <div className="w-full flex justify-between items-center">
                  <span className="text-lg font-semibold text-green-400">
                    Subtotal ={" "}
                  </span>
                  <span className="text-lg font-semibold text-green-400">
                    {"Rs." + subTotal + "/-"}
                  </span>
                </div>
                <div className="w-full flex justify-between items-center">
                  <span className="text-lg font-semibold text-green-400">
                    Delivery Fee ={" "}
                  </span>
                  <span className="text-lg font-semibold text-green-400">
                    {"Rs." + deliveryFee + "/-"}
                  </span>
                </div>
                <div className="w-full flex justify-between items-center">
                  <span className="text-lg font-semibold text-green-400">
                    Taxes ={" "}
                  </span>
                  <span className="text-lg font-semibold text-green-400">
                    {"Rs." + taxes + "/-"}
                  </span>
                </div>
              </div>
              <div className="w-full flex justify-between items-center p-8">
                <span className="text-xl font-semibold text-green-400">
                  Total ={" "}
                </span>
                <span className="text-xl font-semibold text-green-400">
                  {"Rs." + total + "/-"}
                </span>
              </div>
              <button className="w-full h-8 bg-green-400 hover:bg-green-500 text-white font-bold rounded-md transition-all duration-300">
                Place Order
              </button>
            </>
          ) : (
            <div className="text-5xl text-red-500 font-semibold flex justify-center items-center">
              Empty Cart
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Home;
