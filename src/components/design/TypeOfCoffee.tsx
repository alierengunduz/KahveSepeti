import { FaArrowLeftLong } from "react-icons/fa6"


const TypeOfCoffee = () => {
  return (
    <div className="border flex flex-col gap-y-2 p-5 rounded-md">
    <h1 className="font-bold">Kahve Çeşitleri</h1>
    <ul className="flex flex-col gap-y-2 text-sm">
      <li className="cursor-pointer hover:text-gray-400 transition duration-300">
        Türk Kahvesi
      </li>
      <li className="cursor-pointer hover:text-gray-400 transition duration-300">
        Filtre Kahvesi
      </li>
      <li className="cursor-pointer hover:text-gray-400 transition duration-300">
        Üçüncü Nesil Kahveler
      </li>
      <li className="cursor-pointer hover:text-gray-400 transition duration-300">
        Çekirdek Kahvesi
      </li>
      <li className="cursor-pointer hover:text-gray-400 transition duration-300">
        Espresso
      </li>
      <li className="cursor-pointer hover:text-gray-400 transition duration-300">
        Kapsül Kahve
      </li>
      <li className="cursor-pointer hover:text-gray-400 transition duration-300">
        Kafeinsiz Kahvesi
      </li>
      <li className="cursor-pointer hover:text-gray-400  transition duration-300">
        Pratik Filtre Kahvesi
      </li>
    </ul>
    <div className="flex items-center gap-x-2 font-bold cursor-pointer hover:text-gray-400 transition duration-300">
      <span>
        <FaArrowLeftLong />
      </span>
      <span>Tüm Kategoriler</span>
    </div>
  </div>
  )
}

export default TypeOfCoffee