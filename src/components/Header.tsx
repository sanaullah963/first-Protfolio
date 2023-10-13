import React from "react";
import Logo from "@/img/logo.png";
import Image from "next/image";
import { navlink } from "@/constant/data";
import Link from "next/link";
// import Navlink from '@/constant/data'
function Header() {
  return (
    <main>
      <nav className="w-full h-16 bg-backgroundColor">
        <div className="h-full max-w-screen-xl mx-auto px-4 flex items-center justify-between">
          {/* navbar logo */}
          <div>
            <Link href={'/'}>
            <Image src={Logo} alt="logo image" className="w-24"></Image>
            </Link>
          </div>
          {/* navbar item */}
          <ul className="flex gap-5 font-semibold text-gray-700 uppercase">
            {navlink.map((i) => (
              <Link key={i.titel} href={i.link}>
                <li
                  className=" text-md hover:text-black cursor-pointer duration-300 relative group overflow-hidden"
                >
                  {i.titel}
                  <span className="h-[1px] w-full bg-black inline-flex absolute -translate-x-[100%] left-0 bottom-0 group-hover:translate-x-0 duration-200 "></span>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </nav>
    </main>
  );
}

export default Header;
