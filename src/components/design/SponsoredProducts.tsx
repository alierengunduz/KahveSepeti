import { GiNotebook } from "react-icons/gi"


const SponsoredProducts = () => {
  return (
    <div className="border flex flex-col gap-y-2 p-5 rounded-md">
    <h1 className="font-bold">Sponsor Ürünler</h1>
    <div className="flex items-center justify-center h-24 cursor-pointer hover:text-gray-400 transition duration-300">
      <span>
        <GiNotebook />
      </span>
      <span>Ürün Bulunamadı</span>
    </div>
  </div>
  )
}

export default SponsoredProducts