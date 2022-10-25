import Link from "next/link";
import { IoChatboxOutline, IoHelpCircleOutline } from "react-icons/io5";
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { HiArrowNarrowRight } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
const Footer = () => {
  const show = (e) => {
    e.target.nextElementSibling.classList.toggle("max-h-0");
    e.target.lastChild.classList.toggle("rotate-180");
  };

  return (
    <footer className="bg-footer-color px-[25px] py-[30px] text-color-brand">
      <div className="grid gap-x-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4">
        <div className="xl:col-start-2 2xl:col-start-2">
          <p className="">
            In an elegantly-designed yet upbeat and lively London Cubitts’ room,
            a group of people can’t wait to read what you’re about to write.
            <br />
            <br />
            Contacts below.
          </p>
          <div className="mt-[20px] border-b-[1px]  border-solid border-[#c6c6c6] pb-10">
            <div className="flex item-center">
              <div className="relative w-[20px] h-[20px] mr-5 ">
                <IoChatboxOutline className=" w-[80%] h-[80%] " />
                <div className="absolute top-[-2px] right-[-2px] h-1 w-1 bg-green-400 rounded-2xl"></div>
              </div>
              <p>Live Chat</p>
            </div>
            <div className="flex item-center">
              <div className="w-[20px] h-[20px] mr-5">
                <FiPhone className=" w-[80%] h-[80%] " />
              </div>
              <p>+442076836369</p>
            </div>
            <div className="flex item-center">
              <div className="w-[20px] h-[20px] mr-5">
                <AiOutlineMail className=" w-[80%] h-[80%] " />
              </div>
              <p>Email</p>
            </div>
            <div className="flex item-center">
              <div className="w-[20px] h-[20px] mr-5">
                <AiOutlineInstagram className=" w-[80%] h-[80%] " />
              </div>
              <p>Instagram</p>
            </div>
            <div className="flex item-center">
              <div className="w-[20px] h-[20px] mr-5">
                <AiOutlineWhatsApp className=" w-[80%] h-[80%] " />
              </div>
              <p>Whatsapp</p>
            </div>
            <div className="flex item-center">
              <div className="w-[20px] h-[20px] mr-5">
                <IoHelpCircleOutline className=" w-[80%] h-[80%] " />
              </div>
              <p>Help and FAQ</p>
            </div>
          </div>
          <div className="pt-5 pb-3 border-b-[1px] 2xl:border-0 xl:border-0 border-solid border-[#c6c6c6] ">
            <p>
              The Newsletter. Sign up for advice on choosing your next
              spectacles, picking up a complimentary artist-designed cloths,
              early access to frame making classes and more.
            </p>
            <Link href={"/"}>
              <a>
                <div className="flex justify-between w-full my-4 px-4 py-2 rounded-2xl bg-button-light border-[1px] border-solid border-button-light hover:border-black">
                  <p>Email</p>
                  <HiArrowNarrowRight />
                </div>
              </a>
            </Link>
          </div>
        </div>
        <div className="pt-3 pb-3 md:pt-0 lg:pt-0 xl:pt-0 2xl:pt-0">
          <p>Currency</p>
          <select
            className="w-full my-4 px-4 py-2 rounded-2xl bg-button-light border-[1px] border-solid border-button-light hover:border-black cursor-pointer "
            name="currency"
            id=""
          >
            <option className="rounded-2xl" value="United Kingdom">
              United Kingdom / GBP
            </option>
          </select>
        </div>
        <div>
          <div
            onClick={(e) => show(e)}
            className="cursor-pointer flex justify-between items-center border-b-[1px] border-solid border-[#c6c6c6] py-3 "
          >
            <button className="pointer-events-none">Shop</button>
            <IoIosArrowDown className="pointer-events-none transition-transform duration-200" />
          </div>
          <div className="max-h-0 overflow-y-hidden relative flex flex-col transition-all duration-500 ease-in-out">
            <Link href="/">
              <a> Virtual try on</a>
            </Link>
            <Link href="/">
              <a> Spectacles</a>
            </Link>
            <Link href="/">
              <a> Sunglasses</a>
            </Link>
            <Link href="/">
              <a> Accessories</a>
            </Link>
            <Link href="/">
              <a> Gift cards</a>
            </Link>
            <Link href="/">
              <a> Stores</a>
            </Link>
          </div>
          <div
            onClick={(e) => show(e)}
            className="cursor-pointer flex justify-between items-center border-b-[1px]  border-solid border-[#c6c6c6] py-3 "
          >
            <button className="pointer-events-none">Help</button>{" "}
            <IoIosArrowDown className="pointer-events-none transition-transform duration-200" />
          </div>
          <div className="max-h-0 overflow-y-hidden relative flex flex-col transition-all duration-200">
            <Link href="/">
              <a> Contact</a>
            </Link>
            <Link href="/">
              <a> Frequently asked questions</a>
            </Link>
            <Link href="/">
              <a> Orders and returns</a>
            </Link>
            <Link href="/">
              <a> Products, warranty and services</a>
            </Link>
            <Link href="/">
              <a> Terms and conditions</a>
            </Link>
            <Link href="/">
              <a> Privacy policy</a>
            </Link>
            <Link href="/">
              <a> Acceptable use policy</a>
            </Link>
          </div>
          <div
            onClick={(e) => show(e)}
            className="cursor-pointer flex justify-between items-center border-b-[1px] border-solid border-[#c6c6c6] py-3 "
          >
            <button className="pointer-events-none">Company</button>{" "}
            <IoIosArrowDown className="pointer-events-none transition-transform duration-200" />
          </div>
          <div className="max-h-0 overflow-y-hidden relative flex flex-col transition-all duration-200">
            <Link href="/">
              <a> About Cubitts</a>
            </Link>
            <Link href="/">
              <a> Careers</a>
            </Link>
            <Link href="/">
              <a> Journal</a>
            </Link>
            <Link href="/">
              <a> Press</a>
            </Link>
            <Link href="/">
              <a> Wholesale</a>
            </Link>
            <Link href="/">
              <a> Code of conduct</a>
            </Link>
          </div>
          <div
            onClick={(e) => show(e)}
            className="cursor-pointer flex justify-between items-center border-b-[1px]  border-solid border-[#c6c6c6] py-3 "
          >
            <button className="pointer-events-none">Eye Examinations</button>{" "}
            <IoIosArrowDown className="pointer-events-none transition-transform duration-200" />
          </div>
          <div className="max-h-0 overflow-y-hidden relative flex flex-col transition-all duration-200">
            <Link href="/">
              <a> Book an exam</a>
            </Link>
          </div>
          <div className="py-5 ">
            <p>
              Modernist design principles applied to spectacles that allow you
              to become your character. Buy rarely, repair when required.
            </p>
          </div>
        </div>
        <div className="flex flex-col xl:row-start-1 2xl:row-start-1 ">
          <p>Copyright Cubitts 2022 </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
