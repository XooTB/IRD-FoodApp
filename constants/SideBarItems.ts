// import dashboard from "../assets/icons/dashboard.svg";
// import home from "../assets/icons/home.svg";
// import more from "../assets/icons/more.svg";
// import videoReplay from "../assets/icons/videoReplay.svg";
// import plane from "../assets/icons/plane.svg";
import {
  Dashboard,
  Home,
  More,
  VideoReplay,
  Plane,
} from "@/components/SideBarIcons";
import React from "react";

const SideBarItems = [
  {
    Icon: Home,
    title: "Home",
    url: "/",
  },
  {
    Icon: Dashboard,
    title: "Dashboard",
    url: "dashboard",
  },
  {
    Icon: Plane,
    title: "Send Feedback",
    url: "feedback",
  },
  {
    Icon: VideoReplay,
    title: "Video Replay",
    url: "video",
  },
  {
    Icon: More,
    title: "More",
    url: "more",
  },
];

export default SideBarItems;
