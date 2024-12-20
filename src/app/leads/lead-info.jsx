import { Card } from "@/components/ui/card";
import { DialogContent } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Sparkle } from "@phosphor-icons/react";
import { Mail, Pencil, X } from "lucide-react";
import Image from "next/image";
import React from "react";
import { ResearchTabs } from "./research-tabs";

export const LeadInfo = ({ lead_data, setOpenLeadInfo }) => {
  return (
    <DialogContent className="max-w-[900px] w-full p-0 gap-0 rounded-lg lg:rounded-xl border-none shadow-[0_2px_8px_4px_rgba(79,70,229,0.1)] overflow-y-auto max-h-[90vh]">
      <div className="p-[2px] rounded-lg lg:rounded-xl bg-gradient-to-r from-blue-600 via-blue-400 to-purple-400 filter">
        <div className="bg-[#FFFFFF] rounded-lg lg:rounded-xl shadow-lg p-6 text-[14px] relative">
          <span
            className="absolute top-6 right-6 cursor-pointer"
            onClick={() => setOpenLeadInfo(false)}
          >
            <X size={20} />
          </span>
          <div className="flex gap-2 items-center">
            <span>
              <Mail size={20} />
            </span>
            <span className="font-bold text-base">
              Engage with {lead_data.name}
            </span>
          </div>
          <Separator className="w-full h-[1px] bg-slate-100 mt-4" />
          <Card className="mt-2 shadow-md p-2 rounded-lg">
            <div className="flex gap-1 items-center">
              <div className="w-[42px]">
                <div className="relative rounded-full w-[40px] aspect-square overflow-hidden bg-slate-100">
                  <Image
                    src="/images/mock-image.svg"
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <p className="font-bold">{lead_data.name}</p>
                <div className="text-[12px] flex gap-1">
                  <span>
                    <Image src="/linkedin.svg" alt="" height={20} width={20} />
                  </span>
                  <span>
                    | {lead_data.title}, {lead_data.business_name}
                  </span>
                </div>
              </div>
            </div>
          </Card>
          <Card className="mt-2 p-2 bg-gradient-to-r from-blue-50 to-purple-50 filter">
            <div className="flex flex-col lg:flex-row gap-2 items-center justify-between w-full">
              <div className="flex gap-2">
                <span className="text-[#2d56d6]">
                  <Sparkle weight="fill" size={16} />
                </span>{" "}
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  {lead_data.description}
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="p-1 bg-white flex gap-2 items-center">
                  <Pencil size={14} /> Edit
                </span>
              </div>
            </div>
          </Card>
          <ResearchTabs lead_data={lead_data} />
        </div>
      </div>
    </DialogContent>
  );
};
