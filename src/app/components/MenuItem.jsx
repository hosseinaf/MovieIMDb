import Link from "next/link";
import React from "react";

function MenuItem({ title, address, Icon }) {
  return (
    <div>
      <Link href={address} className="hover:text-amber-500">
        <Icon className="text-2xl sm:hidden" />
       <p className="uppercase text-red-500 hidden sm:inline">{title}</p> 

      </Link>
    </div>
  );
}

export default MenuItem;
