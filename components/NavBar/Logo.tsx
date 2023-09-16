"use client";

import Image from "next/image";

const Logo = () => {
  return (
    <Image
      alt="logo"
      height={100}
      width={100}
      src={"/images/logo.png"}
      className="hidden md:block cursor-pointer"
    />
  );
};

export default Logo;
