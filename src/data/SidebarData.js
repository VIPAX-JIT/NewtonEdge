import React from "react";
import { DiDatabase, DiGit, DiCisco } from "react-icons/di";
import { BiAbacus, BiBrain, BiLogoAws } from "react-icons/bi";
export const SidebarData = [
  {
    title: "Home",
    icon: React.createElement(DiCisco),
    link: "/home",
  },
  {
    title: "DSA",
    icon: React.createElement(DiDatabase),
    link: "/dsa",
  },
  {
    title: "WAP",
    icon: React.createElement(DiGit),
    link: "/wap",
  },
  {
    title: "MATHEMATICS",
    icon: React.createElement(BiAbacus),
    link: "/mathematics",
  },
  {
    title: "IKS",
    icon: React.createElement(BiBrain),
    link: "/iks",
  },
  {
    title: "Pandas",
    icon: React.createElement(BiLogoAws),
    link: "/pandas",
  },
];
