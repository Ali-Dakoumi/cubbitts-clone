import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logo.svg";

const CheckoutNav = () => {
  return (
    <div className="z-[100] h-14  w-full ml-[5px] grid items-center pb-4 pt-4 borderb md:ml-[25px] xl:ml-[25px] 2xl:ml-[25px]">
      <div className="justify-self-center md:justify-self-start xl:justify-self-start 2xl:justify-self-start col-start-1 row-start-1">
        <Link href={"/"}>
          <a href="">
            <Image src={logo} width={92} height={24} />
          </a>
        </Link>
      </div>
      <div className="links justify-self-center col-start-1 row-start-1"></div>
      <div className="links justify-self-end col-start-1 row-start-1"></div>
    </div>
  );
};

export default CheckoutNav;
