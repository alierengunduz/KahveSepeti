import Banner from '../components/layout/Banner'
import Header from '../components/layout/Header'
import Slider from '../components/slider/Slider'
import Content from '../components/content/Content'
import DiscountProduct from '../components/discountProduct/DiscountProduct'
import CoffeeTv from '../components/coffeeTv/CoffeeTv'
import SliderTwo from '../components/sliderTwo/SliderTwo'
import Footer from '../components/layout/Footer'
const HomePage = () => {
  return (
    <div>
        <Banner />
        <Header />
        <Slider />
        <Content />
        <DiscountProduct />
        <CoffeeTv />
        <SliderTwo />
        <Footer />
    </div>
  )
}

export default HomePage