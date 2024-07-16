import Slider from "react-slick";
import Card from "../../components/design/Card";

const sliderData = [
  {
    id: 1,
    image: "/images/discount/discount1.webp",
    title:
      "Nish Çilek, Karamel, Beyaz Çikolata, Petibör Aromalı Şurup 4x250 ML - C",
    oldPrice: 389.90,
    newPrice: 329.90,
    discount: 15,
  },
  {
    id: 2,
    image: "/images/discount/discount2.webp",
    title: "Nish Fındık Çilek Çikolata Şurupları 3 x 700 ml",
    oldPrice: 389.90,
    newPrice: 329.90,
    discount: 15,
  },
  {
    id: 3,
    image: "/images/discount/discount3.webp",
    title: "Nish Şurup Pompası 12'li Set",
    oldPrice: 389.90,
    newPrice: 329.90,
    discount: 15,
  },
  {
    id: 4,
    image: "/images/discount/discount4.webp",
    title: "Nish Şurup Pompası 6'lı Set.",
    oldPrice: 389.90,
    newPrice: 329.90,
    discount: 15,
  },
  {
    id: 5,
    image: "/images/discount/discount5.webp",
    title: "Nish Filtre Kahve Cuba Cerrano Lavado 250gr",
    oldPrice: 389.90,
    newPrice: 329.90,
    discount: 15,
  },
  {
    id: 6,
    image: "/images/discount/discount6.webp",
    title:
      "Sirius Nespresso Uyumlu Single Origin Kapsül Kahve 7 Brasil 3'lü Set (30 Kapsül)",
      oldPrice: 389.90,
      newPrice: 329.90,
      discount: 15,
  },
  {
    id: 7,
    image: "/images/discount/discount7.webp",
    title:
      "Sirius Nespresso Uyumlu Single Origin Kapsül Kahve 6 Guatemala 3'lü Set (30 Kapsül)",
      oldPrice: 389.90,
      newPrice: 329.90,
      discount: 15,
  },
  {
    id: 8,
    image: "/images/discount/discount8.webp",
    title: "Nish Karamel Aromalı Şurup 3 x 700 ML - P",
    oldPrice: 389.90,
    newPrice: 329.90,
    discount: 15,
  },
];

const DiscountProduct = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // lg
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768, // md
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640, // sm
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // xs
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="py-10 sm:px-20 px-1 flex flex-col gap-y-10">
      <div className="flex flex-col items-center gap-y-1">
        <img
          className="w-9 h-9 object-cover"
          src="/images/discount/discountLogo.webp"
          alt="discountLogo"
        />
        <h1 className="font-bold tracking-wide text-lg">İndirimli Ürünler</h1>
      </div>
      <div>
        <Slider {...settings}>
          {sliderData.map((item) => (
            <Card item={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default DiscountProduct;
