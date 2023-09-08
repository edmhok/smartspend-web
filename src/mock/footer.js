import { FaLinkedin, FaTwitterSquare, FaTelegramPlane } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export const footerContent = [
  {
    title: "Smartspend Map",
    subtitles: [
      {
        text: "About Us",
        href: "/about",
      },
      {
        text: "Contact Us",
        href: "/blank",
      },
      {
        text: "Sale In Smartspend",
        href: "/blank",
      },
      {
        text: "Career Opportunities",
        href: "/blank",
      },
    ],
  },
  {
    title: "Customer Services",
    subtitles: [
      {
        text: "Common Questions",
        href: "/blank",
      },
      {
        text: "Return Procedures",
        href: "/blank",
      },
      {
        text: "Privacy",
        href: "/blank",
      },
    ],
  },
  {
    title: "Shopping Guide",
    subtitles: [
      {
        text: "How To PlaceAnOrder",
        href: "/blank",
      },
      {
        text: "Order Submission Procedure",
        href: "/blank",
      },
      {
        text: "Payment Methods",
        href: "/blank",
      },
    ],
  },
];

export const socialMedia = [
  {
    name: "instagram",
    icon: AiFillInstagram,
    href: "/",
  },
  {
    name: "linkedin",
    icon: FaLinkedin,
    href: "/",
  },
  {
    name: "twitter",
    icon: FaTwitterSquare,
    href: "/",
  },
  {
    name: "telegram",
    icon: FaTelegramPlane,
    href: "/",
  },
];
