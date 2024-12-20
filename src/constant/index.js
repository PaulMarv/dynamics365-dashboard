import {
  ChartNoAxesColumn,
  Award,
  File,
  Rocket,
  Shrink,
  ClipboardPenLine,
  FolderOpen,
  UserRound,
  PhoneCall,
  CircleHelp,
  FileWarning,
  FileClock,
  FileText,
  FileBox,
  Cuboid,
  FileChartColumnIncreasing,
  Megaphone,
  ClipboardList,
} from "lucide-react";

export const sideNav = {
  //   {
  //     text: "Dashboard",
  //     path: "/dashboard",
  //     icon: <ChartNoAxesColumn size={16} strokeWidth={2}  />,
  //   },
  //   {
  //     text: "Skill Test",
  //     path: "/skill-test",
  //     icon: <Award size={16} strokeWidth={2} />,
  //   },
  //   {
  //     text: "Internship",
  //     path: "/internship",
  //     icon: <File size={16} strokeWidth={2} />,
  //   },
  my_work: [
    {
      text: "Sales accelerator",
      path: "/#",
      icon: <Rocket size={16} />,
    },

    { text: "Dashboards", path: "/#", icon: <Shrink size={16} /> },
    { text: "Activities", path: "/#", icon: <ClipboardPenLine size={16} /> },
  ],
  customers: [
    { text: "Accounts", path: "/#", icon: <FolderOpen size={16} /> },
    { text: "Contacts", path: "/#", icon: <UserRound size={16} /> },
  ],
  sales: [
    { text: "Leads", path: "/leads", icon: <PhoneCall size={16} /> },
    {
      text: "Opportunities",
      path: "/opportunities",
      icon: <FileWarning size={16} />,
    },
    {
      text: "Competitors",
      path: "/competitors",
      icon: <CircleHelp size={16} />,
    },
  ],
  collateral: [
    { text: "Quotes", path: "/#", icon: <FileClock size={16} /> },
    { text: "Orders", path: "/#", icon: <FileText size={16} /> },
    { text: "Invoices", path: "/#", icon: <FileBox size={16} /> },
    { text: "Products", path: "/#", icon: <Cuboid size={16} /> },
    {
      text: "Sales Literature",
      path: "/#",
      icon: <FileChartColumnIncreasing size={16} />,
    },
  ],
  marketing: [
    { text: "Marketing Lists", path: "/#", icon: <ClipboardList size={16} /> },
    { text: "Quick Campaigns", path: "/#", icon: <Megaphone size={16} /> },
  ],
};
