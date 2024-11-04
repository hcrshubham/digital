import { MdOutlineBusinessCenter, MdOutlineSchool } from "react-icons/md";
import { FaAward } from "react-icons/fa";

module.exports = [
  {
    id: 1,
    title: "Experience",
    icon: <MdOutlineSchool />,
    items: [
      {
        id: 1,
        date: "2021 - Present",
        title: "Product Engineer",
        place: "Tata Consultancy Services",
        bg: "#EEF5FA",
      },
    ],
  },
  {
    id: 2,
    title: "Education",
    icon: <MdOutlineBusinessCenter />,
    items: [
      {
        id: 1,
        date: "2022 - 2024 (Distance Education)",
        title: "Master of Computer Application (MCA)",
        place: "Chandigarh University",
        bg: "#FFF4F4",
      },

      {
        id: 2,
        date: "2018 - 2021",
        title: "Bachelor of Computer Applications (BCA)",
        place: "MMHAPU University, Patna",
        bg: "#FFF1FB",
      },
    ],
  },
  {
    id: 3,
    title: "Awards",
    icon: <FaAward />,
    items: [
      {
        id: 1,
        date: "2024",
        title: "Hands-on approach to AI for real-world applications",
        place: "IIT Kharagpur AI4ICPS Certificate Programme",
        bg: "#FCF4FF",
      },

      {
        id: 2,
        date: "2016",
        title: "Cyber Security",
        place: "i3indya Technologies",
        bg: "#FCF9F2",
      },
    ],
  },
];
