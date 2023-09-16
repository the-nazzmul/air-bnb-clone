"use client";

import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
      <div className="flex flex-row items-center justify-between divide-x-[1px]">
        <div className="text-sm font-semibold px-6">Anywhere</div>
        <div className="text-sm font-semibold px-6 hidden md:block">
          Any Week
        </div>
        <div className="flex items-center pl-6 pr-2 gap-3 text-gray-600 text-sm">
          <div className="hidden sm:block">Add Guest</div>
          <div className="rounded-full bg-rose-500 text-white p-2">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
