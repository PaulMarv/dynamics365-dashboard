import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sparkle } from "@phosphor-icons/react";
import React from "react";

export const ResearchTabs = ({ lead_data }) => {
  const [api, setApi] = React.useState();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

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

  const lead_info_data = [
    {
      reasons: [
        `${lead_data.name} is a reasonable person and very understanding.`,
        "Multiple people in the company have reported slowness during reports.",
        `${lead_data.business_name} currently see $200M in revenue from their coffee shop.`,
      ],
    },
    {
      reasons: [
        `${lead_data.name} values long-term partnerships and is open to negotiations.`,
        "The company's logistics team is requesting more efficient tools for shipment tracking.",
        `${lead_data.business_name} generates $1.5M monthly revenue from their subscription services.`,
      ],
    },
    {
      reasons: [
        `${lead_data.name} is keen on modernizing the supply chain process.`,
        "Customer feedback suggests frequent delays in delivery schedules.",
        `${lead_data.business_name} reported a 20% increase in profits after introducing new payment options.`,
      ],
    },
    {
      reasons: [
        `${lead_data.name} has a strong focus on team growth and development.`,
        "The finance department has expressed interest in a more automated solution for invoices.",
        `${lead_data.business_name} is looking to scale their operations to new international markets.`,
      ],
    },
    {
      reasons: [
        `${lead_data.name} is interested in exploring eco-friendly alternatives for packaging.`,
        "The marketing team has identified gaps in customer acquisition channels.",
        `${lead_data.business_name}reported a 15% increase in customer retention after adopting CRM tools.`,
      ],
    },
  ];

  return (
    <div className="w-full mt-4">
      <Tabs defaultValue="research">
        <TabsList
          className="overflow-x-auto flex justify-start items-start w-full max-w-max overflow-y-hidden"
          hideSeparator={false}
          separatorClassName="w-full h-[2px]"
        >
          {/* <TabsTrigger value="engage">Engage</TabsTrigger> */}
          <TabsTrigger value="research">Research</TabsTrigger>
        </TabsList>

        <TabsContent value="research">
          <div>Engage tab</div>
        </TabsContent>
        <TabsContent value="research">
          <div className="">
            <Carousel setApi={setApi} className="w-full ">
              <CarouselContent className="">
                {lead_info_data.map((_, index) => (
                  <CarouselItem key={index} className="p-1">
                    <Card className="">
                      <div className="rounded-lg relative bg-gradient-to-r from-blue-50  to-purple-100 filter">
                        {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-10 pointer-events-none rounded-lg"></div> */}
                        <span className="rounded-md p-2 absolute -top-1 -right-1 bg-white">
                          <Sparkle weight="fill" fill="#504edb" size={14} />
                        </span>
                        <div className="relative p-4 lg:h-[140px] overflow-x-hidden overflow-y-auto">
                          <p className="bg-gradient-to-r from-blue-500  to-purple-500 bg-clip-text text-transparent">
                            Why I picked this lead
                          </p>
                          <div className="flex flex-col gap-1 mt-1">
                            {_.reasons.map((reason) => (
                              <span key={reason}> • {reason}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
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
        </TabsContent>
      </Tabs>
    </div>
  );
};
