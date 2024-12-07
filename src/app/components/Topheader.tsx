import React from 'react';

const Topheader = () => {
  return (
    <div className="w-full h-12 md:h-[70px] flex items-center bg-black px-4">
      <div className="flex flex-wrap items-center justify-between w-full text-white text-sm md:text-base">
        {/* Sale Announcement */}
        <span className="text-center w-full md:w-auto">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </span>

        {/* Shop Now and Country Selector */}
        <div className="flex flex-wrap items-center gap-4 mt-2 md:mt-0 w-full md:w-auto justify-center md:justify-end">
          <span className="underline cursor-pointer">
            Shop Now
          </span>
          <select
            name="country"
            id="country"
            className="bg-black text-white border border-gray-600 rounded px-2 py-1 mt-2 md:mt-0"
          >
            <option value="">Pakistan</option>
            <option value="us">United States</option>
            <option value="uk">United Kingdom</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Topheader;
