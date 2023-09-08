import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Bottombar = () => {
  const pathName = usePathname();
  return (
    <section className="bottombar">
      <div className="bottombar_container">
        {sidebarLinks?.map((link) => (
          <Link
            href={link?.route}
            key={link?.label}
            className={`bottombar_link ${
              pathName === link?.route && "bg-primary-500"
            }`}
          >
            <Image src={link.imgURL} width={24} height={24} alt={link.label} />
            <p className="text-light-1 max-lg:hidden">{link.label}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Bottombar;
