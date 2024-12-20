"use client";

import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableDescription,
} from "@/components/ui/table"; // Replace with your actual path
import { Checkbox } from "@/components/ui/checkbox";

const mockData = [
  {
    id: 1,
    name: "Alice Johnson",
    topic: "CRM user experience feedback",
    status: "New",
    createdOn: "2024-01-15",
  },
  {
    id: 2,
    name: "Bob Smith",
    topic: "Integration issues with Salesforce",
    status: "Old",
    createdOn: "2023-12-20",
  },
  {
    id: 3,
    name: "Charlie Brown",
    topic: "Suggestions for pipeline management",
    status: "New",
    createdOn: "2024-02-10",
  },
  {
    id: 4,
    name: "Diana Prince",
    topic: "Feature request: enhanced reporting",
    status: "Old",
    createdOn: "2023-11-05",
  },
  {
    id: 5,
    name: "Eve Adams",
    topic: "Onboarding experience feedback",
    status: "New",
    createdOn: "2024-01-25",
  },
  {
    id: 6,
    name: "Frank White",
    topic: "CRM downtime concerns",
    status: "Old",
    createdOn: "2023-10-15",
  },
  {
    id: 7,
    name: "Grace Hopper",
    topic: "Request for email tracking feature",
    status: "New",
    createdOn: "2024-03-01",
  },
  {
    id: 8,
    name: "Henry Cavill",
    topic: "Improving contact management UI",
    status: "Old",
    createdOn: "2023-12-30",
  },
  {
    id: 9,
    name: "Irene Adler",
    topic: "Bug report: duplicate leads issue",
    status: "New",
    createdOn: "2024-02-20",
  },
  {
    id: 10,
    name: "John Doe",
    topic: "Improving workflow automation",
    status: "Old",
    createdOn: "2023-09-12",
  },
];

export default function SearchableTable() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter data based on the search term
  const filteredData = mockData.filter((item) =>
    Object.values(item)
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <TableDescription className="mb-4">
        <div className="w-full max-w-[400px] p-[2px] rounded-lg bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
          <input
            type="text"
            placeholder="Sort, filter, and search with Copilot."
            className="w-full p-2 rounded-lg bg-white focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </TableDescription>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Topic</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Created On</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {filteredData.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="text-blue-400">
                <span>
                  <Checkbox className="mr-2" />
                </span>
                {item.name}
              </TableCell>
              <TableCell>{item.topic}</TableCell>
              <TableCell>{item.status}</TableCell>
              <TableCell>{item.createdOn}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
