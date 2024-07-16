
const AllBrand = () => {
  return (
    <div className="border flex flex-col gap-y-2 p-5 rounded-md">
    <h1 className="font-bold">Tüm Markalar</h1>
    <ul className="flex flex-col gap-y-3 text-sm">
      <li className="flex items-center gap-x-2 cursor-pointer hover:text-gray-400 transition duration-300">
        <input type="checkbox" />
        <span>Nish Kahve (141)</span>
      </li>
      <li className="flex items-center gap-x-2 cursor-pointer hover:text-gray-400 transition duration-300">
        <input type="checkbox" />
        <span>Sirius Kahve (43)</span>
      </li>
    </ul>
  </div>
  )
}

export default AllBrand