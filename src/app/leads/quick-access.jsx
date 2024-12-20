import { Card } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import React from "react";

const QuickAcces = () => {
  return (
    <div>
      <Card className="bg-[#FFFFFF] rounded-md shadow-md">
        <div className="flex justify-between text-[12px] p-0">
          <div className="flex gap-1 items-center">
            <span>My open leads</span>{" "}
            <span className="ml-2">
              <ChevronDown size={14} />
            </span>
          </div>
          <div>
            show charts
          </div>
        </div>
      </Card>
    </div>
  );
};

export default QuickAcces;
