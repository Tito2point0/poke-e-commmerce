import React from 'react';
import Link from 'next/link';

const CatagoryList = () => {
  return (
    <div className="px-4 overflow-x-scroll">
          <div className="flex gap-4 md:gap-8"></div>
          <Link href="/list?cat=test">
          </Link>
      </div>
  );
};

export default CatagoryList;



