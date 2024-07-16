import {
  MegaMenu,
  MegaMenuDropdown,
  NavbarCollapse,
  NavbarLink,
} from "flowbite-react";
import {Link} from "react-router-dom";
const MyNavbar = () => {
  return (
    <MegaMenu className="bg-primary flex items-center justify-between text-white text-5xl">
      <div>
        <NavbarCollapse>
          <NavbarLink className="text-white text-xs text-center" href="/kategori/kampanyali">
           Kampanyalı Ürünler
          </NavbarLink>
          <NavbarLink className="text-white text-xs text-center">
            <MegaMenuDropdown
              className="bg-third text-white border-none"
              toggle={<>
              <Link to="/kategori/kahve">Kahve Çeşitleri</Link>
              </>}
            >
              <ul className="grid grid-cols-3">
                <div className="space-y-4 p-4">
                  <li>
                    <a href="#" className="hover:text-primary-600">
                      Türk Kahvesi
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary-600 dark:hover:text-primary-500"
                    >
                      Üçüncü Nesil Kahveler
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary-600 dark:hover:text-primary-500"
                    >
                      Espresso
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary-600 dark:hover:text-primary-500"
                    >
                      Filtre Kahve
                    </a>
                  </li>
                </div>
                <div className="space-y-4 p-4">
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary-600 dark:hover:text-primary-500"
                    >
                      Kahve Çekirdekleri
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary-600 dark:hover:text-primary-500"
                    >
                      Kahve Makineleri
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary-600 dark:hover:text-primary-500"
                    >
                      Kahve Fincanları
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary-600 dark:hover:text-primary-500"
                    >
                      Kahve Öğütücüler
                    </a>
                  </li>
                </div>
                <div className="space-y-4 p-4">
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary-600 dark:hover:text-primary-500"
                    >
                      Kapsül Kahve
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary-600 dark:hover:text-primary-500"
                    >
                      Pratik Filtre Kahve
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary-600 dark:hover:text-primary-500"
                    >
                      Kafeinsiz kahve
                    </a>
                  </li>
                </div>
              </ul>
            </MegaMenuDropdown>
          </NavbarLink>
          <NavbarLink className="text-white text-xs text-center" href="/kategori/suruplar">
            Şurup İçecekler
          </NavbarLink>
          <NavbarLink className="text-white text-xs text-center" href="/kategori/baz">
            Baz İçecekler
          </NavbarLink>
  
        </NavbarCollapse>
      </div>
    </MegaMenu>
  );
};

export default MyNavbar;
