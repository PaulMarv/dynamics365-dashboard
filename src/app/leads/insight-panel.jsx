"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@radix-ui/react-separator";
import { Mail, MessageSquareDot, Sparkle } from "lucide-react";
import React, { act, useState } from "react";
import Image from "next/image";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { LeadInfo } from "./lead-info";

export const InsightPanel = () => {
  const [api, setApi] = React.useState();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [activityNumber, setActivityNumber] = useState(2);
  const [openLeadInfo, setOpenLeadInfo] = React.useState(false);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const lead_persons = [
    {
      name: "Jane Reyes",
      title: "COO",
      business_name: "Northwind Traders",
      message: "Engage with Jane Reyes",
      message_icon: <MessageSquareDot />,
      description:
        "Jane may be interested in upgrading espresso machines for her in-store coffee shops.",
      opportunities: ["Expand business", "High buying intent"],
    },
    {
      name: "Michael Smith",
      title: "Head of Procurement",
      business_name: "TechWorld Inc.",
      message: "Reach out to Michael Smith",
      message_icon: <MessageSquareDot />,
      description:
        "Michael is evaluating suppliers for the next quarter and is open to discussing innovative solutions.",
      opportunities: ["Supplier evaluation", "Exploring partnerships"],
    },
    {
      name: "Emily Chen",
      title: "Marketing Director",
      business_name: "Green Solutions",
      message: "Connect with Emily Chen",
      message_icon: <MessageSquareDot />,
      description:
        "Emily is exploring new vendors to support her company’s sustainability initiatives.",
      opportunities: ["Sustainability focus", "Marketing partnerships"],
    },
    {
      name: "Raj Patel",
      title: "CEO",
      business_name: "Urban Goods",
      message: "Schedule a call with Raj Patel",
      message_icon: <MessageSquareDot />,
      description:
        "Raj is looking for scalable logistics solutions for expanding his retail chain.",
      opportunities: ["Logistics optimization", "Growth strategy"],
    },
    {
      name: "Sophia Gomez",
      title: "VP of Operations",
      business_name: "EcoStyle Apparel",
      message: "Discuss opportunities with Sophia Gomez",
      message_icon: <MessageSquareDot />,
      description:
        "Sophia is researching cost-effective production equipment to improve efficiency.",
      opportunities: ["Operational efficiency", "Cost reduction"],
    },
  ];

  const key_activities = [
    {
      image: "/images/clipart67444.png",
      title: "Cafe a 100 for Woodland Bank",
      activity: "Reply dreaft and Chris shey",
    },
    {
      image: "/images/clipart67444.png",
      title: "Partnership Opportunity for Fabrikan",
      activity: "Prepare me for frabrikan key stakeholder meeting ",
    },
    {
      image: "/images/clipart67444.png",
      title: "Networking oppportunity with Jane",
      activity: "Send a social connect on LinkedIn",
    },
    {
      image: "/images/clipart67444.png",
      title: "Marketing Strategy with stakeholder",
      activity: "Carry physical product along",
    },
    {
      image: "/images/clipart67444.png",
      title: "sales opportinity",
      activity: "sel to executives in draujh retreat",
    },
  ];

  return (
    <div className="mt-6 p-[2px] rounded-lg lg:rounded-xl bg-gradient-to-r from-blue-500 via-purple-400 to-blue-500 shadow-[0_2px_8px_4px_rgba(79,70,229,0.1)] filter ">
      <Card className="bg-[#FFFFFF] rounded-lg lg:rounded-xl  shadow-lg text-[14px]">
        <div className="flex flex-col lg:flex-row">
          <div>
            <p className="font-bold text-16px">
              Hi Mona, <span className="text-blue-800">68%</span> of goals
              achieved and the rest can be achieved by focusing on 20 top leads.
            </p>
          </div>
        </div>
        <div className="mt-4 flex flex-col xl:flex-row justify-between gap-4 min-h-[200px]  h-full">
          <div className="">
            <p>
              Copilot has pinpointed 20 key leads that show strong purchase
              intent and are actively engaging. These leads need your focus
            </p>
            {/* CAROUSEL */}
            <div className="mx-auto  mt-4">
              <Carousel
                opts={{
                  align: "start",
                }}
                className="w-full"
              >
                <CarouselContent setApi={setApi}>
                  {lead_persons.map((_, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 ">
                      <Dialog
                        open={openLeadInfo}
                        onOpenChange={setOpenLeadInfo}
                      >
                        <DialogTrigger className="p-1">
                          <Card className="w-full text-left shadow-[0_0px_1px_0px_rgba(148,163,184,0.6),0_1px_2px_0px_rgba(148,163,184,0.6)]">
                            
                              <div className="flex gap-1 items-center">
                                <span className=" relative rounded-full w-[30px] aspect-square overflow-hidden bg-slate-100">
                                  <Image
                                    src={"/images/mock-image.svg"}
                                    alt=""
                                    fill
                                    className="object-cover"
                                  />
                                </span>
                                <div>
                                  <p className="font-bold">{_.name}</p>
                                  <div className="text-[12px]">
                                    {_.title} • {_.business_name}
                                  </div>
                                </div>
                              </div>
                              <div className="">
                                <div className="rounded-lg relative lg:h-[120px] overflow-x-hidden overflow-y-auto">
                                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-10 pointer-events-none rounded-lg"></div>
                                  <span className="rounded-md p-2 absolute -top-1 -right-1 bg-white">
                                    <Sparkle fill="#504edb" size={14} />
                                  </span>
                                  <div className="relative p-2">
                                    <div className="mt-2">
                                      <div className=" flex items-center gap-1">
                                        <Mail size={14} />{" "}
                                        <span className="font-bold">
                                          {_.message}
                                        </span>
                                      </div>
                                    </div>
                                    <p className="mt-1 text-left">
                                      {_.description}
                                    </p>
                                  </div>
                                </div>
                                <div className=" flex gap-2 ">
                                  {/* {_.opportunities.map((item, index) => (
                                    <div key={index}>
                                      {item}{" "}
                                      {_.opportunities.length - 1 !== index && (
                                        <span>•</span>
                                      )}
                                    </div>
                                  ))} */}
                                </div>
                              </div>
                            
                          </Card>
                        </DialogTrigger>
                        <LeadInfo
                          lead_data={_}
                          setOpenLeadInfo={setOpenLeadInfo}
                          openLeadInfo={openLeadInfo}
                        />
                      </Dialog>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              {/* <div className="py-2 text-center text-sm text-muted-foreground">
                Slide {current} of {count}
              </div> */}
            </div>
            <div></div>
          </div>
          <Separator
            orientation="vertical"
            className="bg-slate-200 w-[1px]  hidden lg:block"
          />
          <div className=" w-full max-w-[360px] ">
            <p className="text-slate-500">Other key activities</p>
            <div className="mt-2 flex flex-col p-2 gap-2 max-h-[200px] overflow-y-auto">
              {key_activities.slice(0, activityNumber).map((item, index) => (
                <Card key={item}>
                  <div className="flex gap-1 items-center">
                    <div className="w-[42px">
                      <div className=" relative rounded-full w-[40px] aspect-square overflow-hidden bg-slate-100">
                        <Image
                          src={item.image}
                          alt=""
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="font-bold">{item.title}</p>
                      <div className="text-[12px]">
                        Woodland Bank • $128000 • 8 days to close
                      </div>
                    </div>
                  </div>
                  <div className="flex ">
                    <div className="bg-slate-100 rounded-sm p-2 flex items-center gap-1">
                      <span>
                        <Mail size={16} />{" "}
                      </span>
                      <span className="text-[10px]">{item.activity}</span>
                    </div>
                    <span className="text-blue-800">
                      <Sparkle fill="#504edb" size={14} />
                    </span>
                  </div>
                </Card>
              ))}
            </div>
            {activityNumber !== key_activities.length && (
              <p
                className="text-blue-800 font-medium mt-2 cursor-pointer"
                onClick={() => setActivityNumber(key_activities.length)}
              >
                show all other activities
              </p>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};
