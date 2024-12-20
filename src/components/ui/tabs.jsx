"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";
import { Separator } from "./separator";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef(
  ({ tabClassName, className, children, hideSeparator, separatorClassName = "", ...props }, ref) => (
    <div className={tabClassName ? tabClassName : ""}>
      <TabsPrimitive.List
        ref={ref}
        className={cn(
          "inline-flex h-10 items-center justify-center rounded-md bg-transparent text-grey-50 gap-8 py-0 px-0",
          className
        )}
        {...props}
      >
        {children}
      </TabsPrimitive.List>
      {!hideSeparator && (
        <Separator
          orientation="horizontal"
          className={`bg-grey-20 ${separatorClassName}`}
        />
      )}
    </div>
  )
);

TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center gap-2 justify-center whitespace-nowrap pb-[9px] text-sm font-medium transition-all ease-linear duration-[0.3s] disabled:pointer-events-none disabled:opacity-50 border-b-2 border-transparent data-[state=active]:text-secondary data-[state=active]:border-purple-700 mb-0 px-0.5 hover:text-purple-700 hover:border-purple-700",
      className
    )}
    {...props}
  />
));

TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn("mt-2 focus:outline-none", className)}
    {...props}
  />
));

TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
