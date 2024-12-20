import { MessageSquare, MessagesSquare, Phone, Recycle } from "lucide-react";
import React from "react";

const RightBar = () => {
  return (
    <div className=" h-screen  z-[1000] px-2 py-[60px] hidden bg-slate-100 lg:flex flex-col gap-4 fixed top-0 right-0 ">
      <span className="cursor-pointer">
        <Recycle size={16} />
      </span>
      <span className="cursor-pointer">
        <MessagesSquare size={16} />
      </span>
      <span className="cursor-pointer">
        <Phone size={16} />
      </span>
      <span className="cursor-pointer">
        <MessageSquare size={16} />
      </span>
    </div>
  );
};

export default RightBar;
