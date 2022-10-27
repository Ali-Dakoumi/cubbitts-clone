import Link from "next/link";
import React from "react";
import { FcApproval } from "react-icons/fc";
export default function Done() {
  return (
    <div className=" w-full h-full flex items-center justify-center flex-col">
      <FcApproval size={70} />
      <p className="text-xs">
        order made with success, return to
        <Link href="/">
          <a className="text-xs underline ">home</a>
        </Link>
        page.
      </p>
    </div>
  );
}
