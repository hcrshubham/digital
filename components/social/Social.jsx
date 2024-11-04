import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Social = () => {
  const socialContent = [
    {
      id: 1,
      link: "https://www.linkedin.com/in/hcrshubham/",
      icon: <FaLinkedinIn />,
      iconClass: "text-[#0072b1]",
    },
    {
      id: 2,
      link: "https://www.instagram.com/hcrshubham/",
      icon: <FaInstagram />,
      iconClass: "text-[#e14a84]",
    },
    {
      id: 3,
      link: "https://twitter.com/hcrshubham",
      icon: <FaTwitter />,
      iconClass: "text-[#1C9CEA]",
    },
    {
      id: 4,
      link: "https://www.facebook.com/hcrshubham",
      icon: <FaFacebookF />,
      iconClass: "text-[#1773EA]",
    },
  ];

  return (
    <>
      {socialContent.map((item) => (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          key={item.id}
        >
          <span className={`socialbtn ${item.iconClass}`}>{item.icon}</span>
        </a>
      ))}
    </>
  );
};

export default Social;
