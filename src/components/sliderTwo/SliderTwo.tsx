import Slider from "react-slick";

const sliderData = [
    {
        img: "/images/slider2/slider2_1.webp",
        title: "Moka Pot Nasıl Kullanılır?",
        description: "Moka pot,ocak üstünde  espresso yapımı için idealdir.Bir kahve makinesi olmadan espresso yapmanın en iyi yolu.",
    },
    {
        img: "/images/slider2/slider2_2.webp",
        title: "Bicerin Kahvesi",
        description: "Bicerin kahvesi, İtalya'nın Torino şehrinde 18. yüzyılda ortaya çıkan bir kahve çeşididir.",
    },
    {
        img: "/images/slider2/slider2_3.webp",
        title: "Moracchino Kahvesi",
        description: "Moracchino kahvesi, İtalya'nın Torino şehrinde ortaya çıkan bir kahve çeşididir.",
    },
    {
        img: "/images/slider2/slider2_4.jpeg",
        title: "En İyi  Kahve Hangisi?",
        description: "En iyi kahve, kişisel damak tadınıza göre değişebilir. Ancak genelde en iyi kahve, taze çekilmiş kahve olur.",
    },
    {
        img: "/images/slider2/slider2_5.jpg",
        title: "Kahve Çekirdeği Nasıl Öğütülür?",
        description: "Kahve çekirdeği öğütme işlemi, kahve çekirdeğinin taze kalmasını sağlar ve kahve demleme işlemi sırasında daha iyi bir tat elde etmenizi sağlar.",
    },
    {
        img: "/images/slider2/slider2_6.webp",
        title: "Kahve Çekirdeği Nasıl Kavrulur?",
        description: "Kahve çekirdeği kavurma işlemi, kahve çekirdeğinin aromasını ve tadını ortaya çıkarır.",
    },

]

const SliderTwo = () => {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024, // lg
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 768, // md
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 640, // sm
            settings: {
              slidesToShow: 1,
            }
          },
        ]
       
      };
  return (
    <div className="py-10 sm:px-20 px-1 flex flex-col gap-y-10">
        <Slider {...settings}>
          {sliderData.map((item, index) => (
            <div key={index} className="px-2"> {/* Boşluk eklemek için px-2 sınıfı eklendi */}
              <div className="h-[371px] flex flex-col p-2 rounded-md bg-white items-center">
                <img
                  className="w-full h-[55%] object-cover rounded-md"
                  src={item.img}
                  alt="slider"
                />
                <div className="h-[45%] flex flex-col items-center text-center  gap-y-3">
                  <h1 className="text-base font-bold">{item.title}</h1>
                    <p className="text-xs text-gray-500">{item.description}</p>
                </div>
                <button className="border-2 border-double border-primary py-2 px-10 rounded-md  hover:bg-primary hover:text-white">İncele</button>
              </div>
            </div>
          ))}
        </Slider>
    </div>
  );
};



export default SliderTwo