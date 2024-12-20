import * as React from "react";

import { cn } from "@/lib/utils";

const Table = React.forwardRef(
  ({ className, tableDescription, ...props }, ref) => (
    <div className="relative w-full border border-[#EAECF0] shadow-md rounded-[8px] bg-[#FFFFFF]">
      <div className="w-full">{tableDescription}</div>
      <div className="w-full overflow-auto">
        <table
          ref={ref}
          className={cn(
            "w-full caption-bottom text-sm table-auto min-w-[820px]",
            className
          )}
          {...props}
        />
      </div>
    </div>
  )
);

Table.displayName = "Table";

const TableDescription = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        "flex items-start justify-between w-full gap-6 flex-wrap p-3",
        className
      )}
      {...props}
    />
  );
};

const TableHeader = React.forwardRef(({ className, ...props }, ref) => (
  <thead
    ref={ref}
    className={cn("[&_tr]:border-b border-grey-30 bg-grey-20/50", className)}
    {...props}
  />
));

TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  />
));

TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      "bg-gray-900 font-medium text-gray-50 dark:bg-gray-50 dark:text-gray-900",
      className
    )}
    {...props}
  />
));

TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "border-b transition-colors border-grey-30 data-[state=selected]:bg-grey-10 dark:data-[state=selected]:bg-grey-80",
      className
    )}
    {...props}
  />
));

TableRow.displayName = "TableRow";

const TableHead = React.forwardRef(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "px-6 py-3 text-xs text-left align-middle text-grey-50 font-regular [&:has([role=checkbox])]:pr-0",
      className
    )}
    {...props}
  />
));

TableHead.displayName = "TableHead";

const TableCell = React.forwardRef(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(
      "px-6 py-3 align-middle text-grey-50 [&:has([role=checkbox])]:pr-0 hover:bg-grey-10/50",
      className
    )}
    {...props}
  />
));

TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-grey-50", className)}
    {...props}
  />
));

TableCaption.displayName = "TableCaption";

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
  TableDescription,
};
