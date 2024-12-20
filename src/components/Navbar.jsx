"use client";

import { sideNav } from "@/constant";
import {
  AlignJustify,
  Award,
  ChevronDown,
  Clock,
  Clock3,
  House,
  Menu,
  PinIcon,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Separator } from "./ui/separator";

export const DesktopNav = () => {
  return (
    <div className=" h-screen lg:w-[200px] bg-slate-100 font-medium  z-[1000] pt-[60px] border-r border-r-[#DCDEE6] hidden lg:flex flex-col fixed top-0 overflow-y-auto text-[14px]">
      <div className=" px-5">
        <AlignJustify size={16} />
      </div>
      <ExtraSideNav />
      <SideNav />
    </div>
  );
};

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:hidden pt-[30px] bg-slate-100">
      <button
        className="fixed top-1 right-4 z-[100000] text-2xl  p-2 rounded"
        onClick={toggleNavbar}
      >
        {isOpen ? (
          <X size={24} color="white" strokeWidth={3} />
        ) : (
          <Menu size={24} color="white" strokeWidth={3} />
        )}
      </button>
      <div
        className={`fixed top-0 right-0 h-full w-64 shadow-sm bg-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-40`}
      >
        <nav className="mt-10 flex flex-col h-screen overflow-y-auto">
          <ExtraSideNav />
          <SideNav />
        </nav>
      </div>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-30 ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={toggleNavbar}
      ></div>
    </div>
  );
};

const SideNav = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="w-full">
        <div className="mt-4">
          <p className="font-bold px-5  mb-2">My work</p>
          {sideNav.my_work.map((item) => (
            <Link
              href={item.path}
              className={` py-2 px-1 h-[45px] flex items-center ${
                pathname.includes(item.path) ? " bg-slate-50 lg:bg-white" : ""
              }`}
              key={item.text}
            >
              <div className="w-5 h-full">
                {pathname.includes(item.path) && (
                  <Separator
                    orientation="vertical"
                    className="h-full w-2 bg-blue-800 rounded-full"
                  />
                )}
              </div>
              <div className="flex gap-3">
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-4">
          <p className="font-bold px-5  mb-2">Customers</p>
          {sideNav.customers.map((item) => (
            <Link
              href={item.path}
              className={` py-2 px-1 h-[45px] flex items-center ${
                pathname.includes(item.path) ? " bg-slate-50 lg:bg-white" : ""
              }`}
              key={item.text}
            >
              <div className="w-5 h-full">
                {pathname.includes(item.path) && (
                  <Separator
                    orientation="vertical"
                    className="h-full w-2 bg-blue-800 rounded-full"
                  />
                )}
              </div>
              <div className="flex gap-3">
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-4">
          <p className="font-bold px-5  mb-2">Sales</p>
          {sideNav.sales.map((item) => (
            <Link
              href={item.path}
              className={` py-2 px-1 h-[45px] flex items-center ${
                pathname.includes(item.path) ? "bg-slate-50 lg:bg-white" : ""
              }`}
              key={item.text}
            >
              <div className="w-5 h-full">
                {pathname.includes(item.path) && (
                  <Separator
                    orientation="vertical"
                    className="h-full w-2 bg-blue-800 rounded-full"
                  />
                )}
              </div>
              <div className="flex gap-3">
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-4">
          <p className="font-bold px-5  mb-2">Collateral</p>
          {sideNav.collateral.map((item) => (
            <Link
              href={item.path}
              className={` py-2 px-1 h-[45px] flex items-center ${
                pathname.includes(item.path) ? "bg-slate-50 lg:bg-white" : ""
              }`}
              key={item.text}
            >
              <div className="w-5 h-full">
                {pathname.includes(item.path) && (
                  <Separator
                    orientation="vertical"
                    className="h-full w-2 bg-blue-800 rounded-full"
                  />
                )}
              </div>
              <div className="flex gap-3">
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

const ExtraSideNav = () => {
  return (
    <div className="">
      <div className="px-5 mt-2">
        <div className="flex gap-3 items-center py-3">
          <span>
            <House size={16} strokeWidth={2} />
          </span>
          <span>Home</span>
        </div>

        <div className="flex gap-3 items-center py-3">
          <span>
            <Award size={16} strokeWidth={2} />
          </span>
          <span>Agents Skill</span>
        </div>

        <div className="flex justify-between items-center py-3">
          <div className="flex gap-3">
            <span>
              <Clock3 size={16} strokeWidth={2} />
            </span>
            <span>Recent</span>
          </div>
          <ChevronDown size={20} />
        </div>
        <div className="flex justify-between items-center py-3">
          <div className="flex gap-3">
            <span className="rotate-45">
              <PinIcon size={16} strokeWidth={2} />
            </span>
            <span>Pinned</span>
          </div>
          <ChevronDown size={20} />
        </div>
      </div>
    </div>
  );
};
