import { CiPhone } from "react-icons/ci";
import { FaFacebookF,FaTwitter,FaYoutube,FaInstagram } from "react-icons/fa";


const FooterUpData = [
  {
    img: "/images/footer/footer1.webp",
    title: "Aynı Gün kargo",
    description: "14:00'a kadar verilen siparişler aynı gün kargoya verilir."
  },
  {
    img: "/images/footer/footer2.webp",
    title: "Güvenli Alışveriş",
    description: "Güvenli alışveriş yapmanın keyfini çıkarın."
  },
  {
    img: "/images/footer/footer3.webp",
    title: "7/24 Müşteri Hizmetleri",
    description: "7 gün 24 saat müşteri hizmetleri ile yanınızdayız."
  },
  {
    img: "/images/footer/footer4.webp",
    title: "Kapıda Ödeme",
    description: "Kapıda ödeme seçeneği ile güvenli alışveriş yapın."
  },
]

const Footer = () => {
  return (
    <div className="bg-primary text-white flex flex-col gap-y-10 py-10 sm:px-20 px-1">
      {/* upper component */}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10  ">
        {
          FooterUpData.map((item,index) => (
            <div key={index} className="flex gap-x-2 items-center">
          <div>
            <img src={item.img} alt="footer1" />
          </div>
          <div className="flex flex-col gap-y-1">
            <h1 className="text-yellow-500 font-bold">{item.title}</h1>
            <p className="text-xs">{item.description}</p>
          </div>
        </div>
          ))
        }
      </div>
      {/* middle component */}
      <div className="grid lg:grid-cols-4 md:grid-cols-3  grid-cols-2  gap-10">
        <div className="">
          <img className="object-cover py-2" src="/images/logo.webp" alt="logo" />
          <p className="py-2">Battalgazi Mah. Aytop Gıda Sanayi Sitesi B Blok No:23-24 Sultanbeyli/İstanbul</p>
          <div className="flex items-center gap-x-2">
          <span className="border p-1 rounded-full border-white"><CiPhone /></span>
          <span>+90 0111 111 11 11</span>
          </div>
          <div className="flex items-center  gap-x-5 mt-5">
            <span className="bg-[#D1B278] p-3 rounded-full cursor-pointer hover:bg-white hover:text-third transition duration-300"><FaFacebookF /></span>
            <span className="bg-[#D1B278] p-3 rounded-full cursor-pointer hover:bg-white hover:text-third transition duration-300"><FaTwitter /></span>
            <span className="bg-[#D1B278] p-3 rounded-full cursor-pointer hover:bg-white hover:text-third transition duration-300"><FaYoutube /></span>
            <span className="bg-[#D1B278] p-3 rounded-full cursor-pointer hover:bg-white hover:text-third transition duration-300"><FaInstagram /></span>
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <h1 className="text-yellow-500 font-bold">Kurumsal</h1>
          <ul className="flex flex-col gap-y-2 text-sm">
            <li>
              <a href="">Hakkımızda</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">E-Katalog</a>
            </li>
            <li>
              <a href="">İnsan Kaynakları</a>
            </li>
            <li>
              <a href="">İletişim</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-y-2">
          <h1 className="text-yellow-500 font-bold">Alışveriş</h1>
          <ul className="flex flex-col gap-y-2 text-sm">
            <li>
              <a href="">Yeni üyelik</a>
            </li>
            <li>
              <a href="">Üye Girişi</a>
            </li>
            <li>
              <a href="">Şifremi Unuttum</a>
            </li>
            <li>
              <a href="">İletişim Formu</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-y-2">
          <h1 className="text-yellow-500 font-bold">Sözleşmeler</h1>
          <ul className="flex flex-col gap-y-2 text-sm">
            <li>
              <a href="">Mesafeli Satış Sözleşmesi</a>
            </li>
            <li>
              <a href="">Teslimat ve İade</a>
            </li>
            <li>
              <a href="">Garanti Şartları</a>
            </li>
            <li>
              <a href="">Tüketici Yasası</a>
            </li>
            <li>
              <a href="">Gizlilik Politikası ve Aydınlatma Metni</a>
            </li>
            <li>
              <a href="">Çalıştığımız Markalar</a>
            </li>
          </ul>
        </div>
      </div>
      {/* lower component */}
      <div className="flex sm:flex-row flex-col sm:gap-y-0 gap-y-5 items-center justify-between">
        <div>
          <p className="text-gray-300 text-xs text-center">2020 © kahvesepeti.com | Tüm Hakları Saklıdır. Kredi kartı bilgileriniz 256Bit SSL sertifikası ile korunmaktadır.</p>
        </div>
        <div>
          <img src="/images/logo.webp" alt="payment" />
        </div>
      </div>
    </div>
  )
}

export default Footer