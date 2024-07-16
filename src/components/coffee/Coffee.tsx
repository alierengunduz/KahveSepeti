import { SlArrowRight } from "react-icons/sl";
import { Pagination } from "antd";
import Footer from "../layout/Footer";
import TypeOfCoffee from "../design/TypeOfCoffee";
import AllBrand from "../design/AllBrand";
import FilterOptions from "../design/FilterOptions";
import CoffeeGridType from "../design/CoffeeGridType";
import SponsoredProducts from "../design/SponsoredProducts";
import StockAndTotalProduct from "../design/StockAndTotalProduct";
import Card from "../design/Card";
import CoffeeInformation from "../design/CoffeeInformation";
const dataCoffee = [
  {
    id: 1,
    title: "Nish Dibek Kahvesi 250 gr Teneke Kutu",
    oldPrice: 185.0,
    newPrice: 105.0,
    discount: 12,
    image: "/images/coffee/coffee1.webp",
  },
  {
    id: 2,
    title: "Nish Dibek Kahvesi 250 gr Teneke Kutu",
    oldPrice: 185.0,
    newPrice: 105.0,
    discount: 12,
    image: "/images/coffee/coffee2.webp",
  },
  {
    id: 3,
    title: "Nish Dibek Kahvesi 250 gr Teneke Kutu",
    oldPrice: 185.0,
    newPrice: 105.0,
    discount: 12,
    image: "/images/coffee/coffee3.webp",
  },
  {
    id: 4,
    title: "Nish Dibek Kahvesi 250 gr Teneke Kutu",
    oldPrice: 185.0,
    newPrice: 105.0,
    discount: 12,
    image: "/images/coffee/coffee4.webp",
  },
  {
    id: 5,
    title: "Nish Dibek Kahvesi 250 gr Teneke Kutu",
    oldPrice: 185.0,
    newPrice: 105.0,
    discount: 12,
    image: "/images/coffee/coffee5.webp",
  },
  {
    id: 6,
    title: "Nish Dibek Kahvesi 250 gr Teneke Kutu",
    oldPrice: 185.0,
    newPrice: 105.0,
    discount: 12,
    image: "/images/coffee/coffee6.webp",
  },
  {
    id: 7,
    title: "Nish Dibek Kahvesi 250 gr Teneke Kutu",
    oldPrice: 185.0,
    newPrice: 105.0,
    discount: 12,
    image: "/images/coffee/coffee7.webp",
  },
  {
    id: 8,
    title: "Nish Dibek Kahvesi 250 gr Teneke Kutu",
    oldPrice: 185.0,
    newPrice: 105.0,
    discount: 12,
    image: "/images/coffee/coffee8.webp",
  },
  {
    id: 9,
    title: "Nish Dibek Kahvesi 250 gr Teneke Kutu",
    oldPrice: 185.0,
    newPrice: 105.0,
    discount: 12,
    image: "/images/coffee/coffee9.webp",
  },
  {
    id: 10,
    title: "Nish Dibek Kahvesi 250 gr Teneke Kutu",
    oldPrice: 185.0,
    newPrice: 105.0,
    discount: 12,
    image: "/images/coffee/coffee10.webp",
  },
  {
    id: 11,
    title: "Nish Dibek Kahvesi 250 gr Teneke Kutu",
    oldPrice: 185.0,
    newPrice: 105.0,
    discount: 12,
    image: "/images/coffee/coffee11.webp",
  },
  {
    id: 12,
    title: "Nish Dibek Kahvesi 250 gr Teneke Kutu",
    oldPrice: 185.0,
    newPrice: 105.0,
    discount: 12,
    image: "/images/coffee/coffee1.webp",
  },
  {
    id: 13,
    title: "Nish Dibek Kahvesi 250 gr Teneke Kutu",
    oldPrice: 185.0,
    newPrice: 105.0,
    discount: 12,
    image: "/images/coffee/coffee2.webp",
  },
  {
    id: 14,
    title: "Nish Dibek Kahvesi 250 gr Teneke Kutu",
    oldPrice: 185.0,
    newPrice: 105.0,
    discount: 12,
    image: "/images/coffee/coffee3.webp",
  },
  {
    id: 15,
    title: "Nish Dibek Kahvesi 250 gr Teneke Kutu",
    oldPrice: 185.0,
    newPrice: 105.0,
    discount: 12,
    image: "/images/coffee/coffee4.webp",
  },
];

const Coffee = () => {
  return (
    <div className="">
     <div className="py-10 sm:px-20 px-1">
     <div className="flex items-center gap-x-1 text-xs">
        <span>Anasayfa</span>
        <span className="text-gray-500">
          <SlArrowRight />
        </span>
        <span>Kahve Çeşitleri</span>
      </div>
      {/* middle component */}
      <div className="flex md:flex-row flex-col md:gap-y-0 gap-y-10 w-full mt-4 md:gap-x-10 gap-x-0">
        {/* left component */}
        <div className="md:w-[20%] w-full flex flex-col gap-y-3">
          <TypeOfCoffee/>
           <AllBrand/>
            <FilterOptions/>
             <CoffeeGridType/>
              <SponsoredProducts/>
        </div>
        {/* right component */}
        <div className="sm:w-[80%] w-full">
          <StockAndTotalProduct />
          <div>
            <ul className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-10">
              {dataCoffee.map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </ul>
          </div>
          {/* pagination component */}
          <div className="mt-10">
            <Pagination defaultCurrent={1} total={50} />
          </div>
          <CoffeeInformation />
        </div>
      </div>
     </div>
        <Footer />
    </div>
  );
};

export default Coffee;
