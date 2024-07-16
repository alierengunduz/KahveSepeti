import { SlArrowRight } from "react-icons/sl";
import { FaArrowLeftLong } from "react-icons/fa6";
import Footer from "../layout/Footer";
import { GiNotebook } from "react-icons/gi";
import StockAndTotalProduct from "../design/StockAndTotalProduct";

const Campaign = () => {
  return (
    <div className="">
     <div className="py-10 sm:px-20 px-1">
     <div className="flex items-center gap-x-1 text-xs">
        <span>Anasayfa</span>
        <span className="text-gray-500">
          <SlArrowRight />
        </span>
        <span>Kampanyalı Ürünler</span>
      </div>
      {/* middle component */}
      <div className="flex sm:flex-row flex-col w-full mt-4 sm:gap-x-10 gap-x-0">
        {/* left component */}
        <div className="sm:w-[20%] w-full flex flex-col gap-y-3">
          <div className="border flex flex-col gap-y-2 p-5 rounded-md">
            <h1 className="font-bold">Kampanyalı Ürünler</h1>
            <div className="flex items-center gap-x-2 font-bold cursor-pointer hover:text-gray-400 transition duration-300">
              <span>
                <FaArrowLeftLong />
              </span>
              <span>Tüm Kategoriler</span>
            </div>
          </div>
        
        </div>
        {/* right component */}
        <div className="sm:w-[80%] w-full">
          <StockAndTotalProduct />
          <div className="border-2 h-48 mt-4 flex flex-col items-center justify-center gap-y-5">
             <span><GiNotebook size={40}/></span>
             <span className="text-sm text-gray-400">Ürün Bulunamadı</span>
          </div>
        </div>
      </div>
     </div>
        <Footer />
    </div>
  );
};


export default Campaign