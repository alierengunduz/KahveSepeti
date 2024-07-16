import { FC } from "react"
import { FaShoppingBasket,FaSearch,FaHeart } from "react-icons/fa";

interface CardProps {
    item: {
        id: number,
        image: string,
        title: string,
        oldPrice: number,
        newPrice: number,
        discount: number
    }
}

const Card:FC<CardProps> = ({item}) => {
  return (
    <li key={item.id} className="border-4 border-double relative group">
      <div className="flex items-center gap-x-10 text-white absolute top-[35%] left-[14%] z-10 opacity-0 group-hover:opacity-100 transition duration-300">
        <span className="bg-[#D1B278] rounded-full p-2"><FaShoppingBasket size={30}/></span>
        <span className="bg-[#D1B278] rounded-full p-2"><FaSearch size={30}/></span>
        <span className="bg-[#D1B278] rounded-full p-2"><FaHeart size={30}/></span>
      </div>
    <div className="h-[371px] flex flex-col p-2 rounded-md bg-white relative">
      <div className="h-[55%] flex items-center justify-center">
        <img
          className="w-[90%] h-full object-contain"
          src={item.image}
          alt="discount1"
        />
      </div>
      <div className="h-[45%] flex flex-col gap-y-3 items-start justify-end">
        <h1 className="text-sm font-medium">{item.title}</h1>
        <div className="flex items-center gap-x-5">
          <span className="line-through text-gray-300">
            {item.oldPrice} TL
          </span>
          <span>{item.newPrice} TL</span>
        </div>
      </div>
      <div className="border-2 p-2 border-gray-600 border-dashed rounded-full absolute top-1 left-1">
        <span>%{item.discount}</span>
      </div>
    </div>
  </li>
  )
}

export default Card