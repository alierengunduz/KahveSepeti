import Navbar from "./Navbar";
import InputComp from "../ui/Input";
import { BsFillBasket3Fill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Drawer, Checkbox, Form, Input } from "antd";
import ButtonComp from "../ui/Button";
import { useState } from "react";
const Header = () => {
  const [open, setOpen] = useState(false);

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <header className="bg-primary w-full flex gap-x-5 items-center justify-between p-5 h-[89px] text-white">
      <div className="sm:w-28 w-16">
        <Link to="/">
          <img
            className="w-full h-full object-cover"
            src="/images/logo.webp"
            alt=""
          />
        </Link>
      </div>
      <div className="flex-1 md:block hidden">
        <Navbar />
      </div>
      <div className="flex items-center gap-x-2">
        <InputComp
          type="text"
          text="primary"
          bg="white"
          placeholder="Arama Yap..."
          w={`sm:w-44 w-32`}
        />
        <span className="bg-[#D1B278] p-2 rounded-full cursor-pointer">
          <BsFillBasket3Fill size={24} />
        </span>
        <span
          onClick={showDrawer}
          className="bg-white p-2 rounded-full text-primary cursor-pointer"
        >
          <FaUser size={24} />
        </span>
      </div>
      {/* modal component login and register */}
      <Drawer title="Hoş Geldiniz" onClose={onClose} open={open}>
        <div>
          <span className="text-sm font-bold">
            Hızlı ve güvenli alışverişe giriş yapın!
          </span>
          <Form
            className="mt-5"
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Lütfen email adresinizi giriniz!",
                },
              ]}
            >
              <Input placeholder="Email Adresinizi Giriniz!" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Lütfen şifrenizi giriniz!",
                },
              ]}
            >
              <Input.Password className="py-2" />
            </Form.Item>

            <div className="flex  justify-between">
              <Form.Item name="remember" valuePropName="checked">
                <Checkbox>Beni Hatırla</Checkbox>
              </Form.Item>
              <div>
                <span className="underline">Şifremi Unuttum</span>
              </div>
            </div>
            <button className="bg-primary text-white w-full py-2 rounded-md hover:bg-opacity-85 transition duration-300">Giriş Yap</button>
          </Form>
          <hr />
          <div className="mt-10 flex flex-col gap-y-3">
            <h2 className="font-bold text-lg">HENÜZ ÜYE DEĞİL MİSİNİZ?</h2>
            <p>Kolayca üye olabilirsiniz.</p>
            <button className="bg-gray-700 text-white w-full py-2 rounded-md hover:bg-opacity-85 transition duration-300">Hemen Üye Ol</button>
            <button className="bg-blue-800 text-white w-full py-2 rounded-md hover:bg-opacity-85 transition duration-300">Facebook İle Bağlan</button>
            <button className="bg-blue-500 text-white w-full py-2 rounded-md hover:bg-opacity-85 transition duration-300">Google İle Bağlan</button>
          </div>
        </div>
      </Drawer>
    </header>
  );
};

export default Header;
