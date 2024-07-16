import Banner from "../../components/layout/Banner"
import Header from "../../components/layout/Header"
import BazComp  from "../../components/baz/BazComp"
import Footer from "../../components/layout/Footer"

const Baz = () => {
  return (
    <div>
              <Banner />

        <Header />
        <BazComp />
        <Footer />
    </div>
  )
}

export default Baz