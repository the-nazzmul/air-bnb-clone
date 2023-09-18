"use client";

import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

function Navbar() {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="p-4 border-b-[1px]">
        <Container>
          <div className="flex gap-3 md:gap-0 items-center justify-between">
            {/* logo */}
            <Logo />
            {/* search section */}
            <Search />
            {/* user menu */}
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Navbar;
