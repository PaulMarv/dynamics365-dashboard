import {
  CircleHelp,
  Grip,
  Lightbulb,
  Plus,
  Settings,
  User,
} from "lucide-react";
import React from "react";

export const Header = () => {
  return (
    <div className="flex gap-3 items-center w-full justify-between px-5 text-white">
      <div className="text-lg font-bold flex gap-3 items-center">
        {" "}
        <Grip size={20} /> <span>Dynamics 365</span>{" "}
        <span className="text-[14px] font-normal">| sales hub</span>
      </div>
      <div className="lg:flex items-center gap-2 hidden text-[14px] font-normal ">
        <span>
          <Lightbulb size={16} />
        </span>
        <span>
          <Plus size={16} />
        </span>
        <span>
          <Settings size={16} />
        </span>
        <span>
          <CircleHelp size={16} />
        </span>
        <span>
          <User size={16} />
        </span>
      </div>
    </div>
  );
};
